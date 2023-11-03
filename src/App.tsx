import { player, team, game, data_obj, player_obj } from './types';
import { get_stats } from './functions';
import { useEffect, useState } from 'react';
import PlayerTable from './PlayerTable';
import Player from './Player';
import * as postgres_data from './postgres_data.json';
import Navbar from './Navbar';

function App() {
  // get data from json server
  const data = postgres_data as data_obj;
  const updated:string = data.meta.last_updated;
  const teams:team[] = data.teams;
  const all_games:game[] = data.games;

  const [all_players, setAllPlayers] = useState<player_obj[]>([]);

  const [players, setPlayers] = useState<player_obj[]>([]);
  const [seasons, setSeasons] = useState<string[]>([data.meta.seasons[0]]);
  const [games, setGames] = useState<game[]>([]);
  const [watchlist, setWatchlist] = useState<player_obj[]>([]);
  const [player, setPlayer] = useState<player_obj|null>(null);

  console.log(all_players);
  // console.log(all_games);
  // console.log(games);
  // console.log(seasons);
  // console.log(game_ids);

  // update players and games based on seasons selected
  useEffect(() => {
    // update games
    setGames(all_games.filter(g => seasons.includes(g.season)));
  }, [seasons]);

  useEffect(() => {
    // update players
    let years:number[] = [];
    seasons.forEach(s => {
      const split:string[] = s.split('-');
      const year:number = parseInt(split[0]);
      years.push(year);
    });
    let pool:player[] = []; 
    data.players.forEach(p => {
      years.forEach(year => {
        if (p.from_year <= year && year <= p.to_year) {
          if (!pool.includes(p)) {
            pool.push(p);
          }
        }
      });
    });
    const player_objs:player_obj[] = get_stats(pool, games);
    setAllPlayers(player_objs);
    setPlayers(player_objs);
  }, [games]);

  // select seasons
  const handleSeasons = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value:string = e.currentTarget.value;
    if (seasons.includes(value)) {
      setSeasons(seasons.filter(season => season !== value));
    } else {
      setSeasons([...seasons, value]);
    }
  }

  // show players 
  const [showPlayers, setShowPlayers] = useState<boolean>(true);
  const handleShowPlayers = (e:React.MouseEvent<HTMLButtonElement>) => {
    setShowPlayers(!showPlayers);
  }
  useEffect(() => {
    setShowPlayers(true);
  }, [players]);

  // search bar function
  const handleSearch = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const value:string = e.currentTarget.value;
    // filter data for players who's name includes values from search bar
    let new_players = all_players.filter(p => `${p.player.first_name} ${p.player.last_name}`.toLowerCase().includes(value.toLowerCase()));
    setPlayers(new_players);
    setShowPlayers(true);
  }

  // get specific player for playerprofile page
  const handlePlayer = (e:React.MouseEvent<HTMLTableCellElement>) => {
    let player_id:number; 
    if (e.currentTarget.dataset.value !== undefined) {
      player_id = parseInt(e.currentTarget.dataset.value);
    }
    const target_player = players.find(p => p.player.id === player_id) as player_obj;
    setPlayer(target_player);
  }

  // add/remove players from watchlist
  const handleWatchlist = (e:React.MouseEvent<HTMLButtonElement>) => {
    const player_id:number = parseInt(e.currentTarget.value);
    players.forEach(p => {
      if (p.player.id === player_id) {
        // is player in watchlist?
        const in_watchlist:boolean = watchlist.some(w => w.player.id === player_id);
        if (in_watchlist) {
          // if player is already in watchlist, remove player
          const updated_watchlist:player_obj[] = watchlist.filter(w => w.player.id !== player_id);
          setWatchlist(updated_watchlist);
        } else {
          // if player is not in watchlist, add player
          setWatchlist([...watchlist, p]);
        }
      }
    });
    setShowWatchlist(true);
  }
  useEffect(() => {
    if (watchlist.length < 1) {
      setShowWatchlist(false);
    }
  }, [watchlist])
  // show watchlist when watchlist button is clicked
  const [showWatchlist, setShowWatchlist] = useState<boolean>(false);
  const handleShowWatchlist = (e:React.MouseEvent<HTMLButtonElement>) => {
    setShowWatchlist(!showWatchlist);
  }

  // get team roster
  const [teamName, setTeamName] = useState<string|null>(null);
  const handleTeam = (e:React.MouseEvent<HTMLButtonElement>) => {
    const team_id:number = parseInt(e.currentTarget.value);
    const team:team = teams.find(team => team.id === team_id) as team;
    setTeamName(`${team.city} ${team.name}`);
    // filter data for all players on the same team
    const pool:player_obj[] = all_players.filter(p => p.player.team_id === team_id);
    setPlayers(pool);
    setPosName(null);
    window.scrollTo({top: 0});
  }

  // filter players by position
  const [posName, setPosName] = useState<string|null>(null);
  const handlePosition = (e:React.MouseEvent<HTMLButtonElement>) => {
    const target_pos:string = e.currentTarget.value;
    // get positions div header
    if (target_pos === 'G') {
      setPosName('Guards');
    } else if (target_pos === 'F') {
      setPosName('Forwards');
    } else if (target_pos === 'C') {
      setPosName('Centers');
    }
    // filter all players based on position
    const pool:player_obj[] = all_players.filter(p => p.player.position.includes(target_pos));
    setPlayers(pool);
    setTeamName(null);
    window.scrollTo({top: 0});
  }

  // clear player page
  const handlePlayerClose = (e:React.MouseEvent<HTMLButtonElement>) => {
    setPlayer(null);
  }

  // back to all players button 
  const handleAllPlayers = (e:React.MouseEvent<HTMLButtonElement>) => {
    setPosName(null);
    setTeamName(null);
    setPlayers(all_players);
  }

  return (
    <div className="App">
      <Navbar data={data} updated={updated} seasons={seasons} watchlist={watchlist} handleSeasons={handleSeasons} showPlayers={showPlayers} handleShowPlayers={handleShowPlayers} showWatchlist={showWatchlist} handleShowWatchlist={handleShowWatchlist} handleSearch={handleSearch} />
      <div className='content'>
        {showWatchlist && 
          <div className='component-div'>
            <h1>Watchlist</h1>
            <PlayerTable players={watchlist} teams={teams} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio1' />
          </div> 
        }
        {player && 
          <div className='component-div'>
            <div>
              <h1>{`${player.player.first_name} ${player.player.last_name}`}</h1>
              <button className='close' onClick={handlePlayerClose}>Close</button>
            </div>
            <Player player={player} teams={teams} games={games} handleTeam={handleTeam} handlePosition={handlePosition} />
          </div>
        }

        {showPlayers && 
          <div>
            {posName ? (
              <h1>Players - {posName}</h1>
            ) : (
              teamName ? (
                <h1>Players - {teamName}</h1>
              ) : (
                <h1>Players</h1>
              )
            )}
              
            {posName || teamName ? (
              <button onClick={handleAllPlayers} >Back to all players</button>
            ) : (
              <button disabled={true} >Back to all players</button>
            )}
            <PlayerTable players={players} teams={teams} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio0' />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
