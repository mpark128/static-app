import { player, team, game, data_obj, player_obj } from './types';
import { useEffect, useState } from 'react';
import PlayerTable from './PlayerTable';
import Player from './Player';
import * as postgres_data from './postgres_data.json';

function App() {
  // get data from json server
  const [players_db, setPlayers_db] = useState<player[]>([]);
  const [teams, setTeams] = useState<team[]>([]);
  const [games, setGames] = useState<game[]>([]);
  const [season, setSeason] = useState<string>('');
  const [updated, setUpdated] = useState<string>('');

  useEffect(() => {
    const data = postgres_data as data_obj;
    setPlayers_db(data.players);
    setTeams(data.teams);
    setGames(data.schedule);
    setSeason(data.meta.seasons[0]);
    setUpdated(data.meta.last_updated);
  }, []);
  console.log(players_db);
  console.log(teams);

  const [players, setPlayers] = useState<player[]>(players_db);
  useEffect(() => {
    setPlayers(players_db);
  }, [players_db]);
  const [watchlist, setWatchlist] = useState<player[]>([]);
  const [team, setTeam] = useState<team|null>(null);
  const [team_roster, setRoster] = useState<player[]>([]);
  const [position, setPosition] = useState<player[]>([]);
  const [player_obj, setPlayer_obj] = useState<player_obj|null>(null);

  // search bar function
  const handleSearch = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const value:string = e.currentTarget.value;
    // filter data for players who's name includes values from search bar
    let new_players = players_db.filter(p => {
      return `${p.first_name} ${p.last_name}`.toLowerCase().includes(value.toLowerCase());
    });
    setPlayers(new_players);
  }

  // get specific player for playerprofile page
  const handlePlayer = (e:React.MouseEvent<HTMLTableCellElement>) => {
    let player_id:number; 
    if (e.currentTarget.dataset.value !== undefined) {
      player_id = parseInt(e.currentTarget.dataset.value);
    }
    const target_player = players_db.find(p => p.id === player_id) as player;
    const target_team = teams.find(t => t.id === target_player.team_id) as team;
    const p_obj:player_obj = {
      player: target_player,
      team: target_team
    };
    setPlayer_obj(p_obj);
    window.scrollTo({top: 0});
  }

  // add/remove players from watchlist
  const handleWatchlist = (e:React.MouseEvent<HTMLButtonElement>) => {
    const player_id:number = parseInt(e.currentTarget.value);
    players.forEach(p => {
      if (p.id === player_id) {
        // is player in watchlist?
        const in_watchlist:boolean = watchlist.some(w => w.id === player_id);
        if (in_watchlist) {
          // if player is already in watchlist, remove player
          const updated_watchlist:player[] = watchlist.filter(w => w.id !== player_id);
          setWatchlist(updated_watchlist);
        } else {
          // if player is not in watchlist, add player
          setWatchlist([...watchlist, p]);
        }
      }
    });
    window.scrollTo({top: 0});
  }

  // get team roster
  const handleTeam = (e:React.MouseEvent<HTMLButtonElement>) => {
    const team_id:number = parseInt(e.currentTarget.value);
    setTeam(teams.find(team => team.id === team_id) as team);
    // filter data for all players on the same team
    const roster:player[] = players_db.filter(player => player.team_id === team_id);
    setRoster(roster);
    setPosition([]);
    window.scrollTo({top: 0});
  }

  // filter players by position
  const [posName, setPosName] = useState<string>('');
  const handlePosition = (e:React.MouseEvent<HTMLButtonElement>) => {
    const targetPos:string = e.currentTarget.value;
    // get positions div header
    if (targetPos === 'G') {
      setPosName('Guards');
    } else if (targetPos === 'F') {
      setPosName('Forwards');
    } else if (targetPos === 'C') {
      setPosName('Centers');
    }
    // filter all players based on position
    const samePos:player[] = players_db.filter(p => {
      return p.position.includes(targetPos);
    });
    setPosition(samePos);
    setTeam(null);
    window.scrollTo({top: 0});
  }

  // reset teams/positions tables
  const handleReset = (e:React.MouseEvent<HTMLButtonElement>) => {
    setTeam(null);
    setPosition([]);
  }

  // clear player page
  const handlePlayerClose = (e:React.MouseEvent<HTMLButtonElement>) => {
    setPlayer_obj(null);
  }

  return (
    <div className="App">
      <h5>Last Updated: {updated}</h5>
      <h5>Season: {season}</h5>
      <div className='content'>
        {watchlist.length > 0 && 
          <div className='component-div'>
            <h3>Watchlist</h3>
            <PlayerTable players={watchlist} teams={teams} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio1' />
          </div> 
        }
        {player_obj && 
          <div className='component-div'>
            <div>
              <h3>{`${player_obj.player.first_name} ${player_obj.player.last_name}`}</h3>
              <button className='close' onClick={handlePlayerClose}>Close</button>
            </div>
            <Player player_obj={player_obj} teams={teams} games={games} handleTeam={handleTeam} handlePosition={handlePosition} />
          </div>
        }
        {team && 
          <div className='component-div'>
            <div>
              {team.city ? (
                <h3>{team.city} {team.name}</h3>
              ) : (
                <h3>{team.name}</h3>
              )}
              <button className='close' onClick={handleReset}>Close</button>
            </div>
            <PlayerTable players={team_roster} teams={teams} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio2' />
          </div>
        }
        {position.length > 0 && 
          <div className='component-div'>
            <div>
              <h3>{posName}</h3>
              <button className='close' onClick={handleReset}>Close</button>
            </div>
            <PlayerTable players={position} teams={teams} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio3' />
          </div>
        }
        <div>
          <h3>Active Players</h3>
          <input id='search' autoFocus autoComplete='off' placeholder='Search Player' type='text' onKeyUp={handleSearch}></input>
        </div>
        <PlayerTable players={players} teams={teams} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio0' />
      </div>
    </div>
  );
}

export default App;
