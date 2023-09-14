import { playerObj } from '../../pern-app/types';
import { useEffect, useState } from 'react';
import PlayerTable from './PlayerTable';
import PlayerProfile from './PlayerProfile';
import * as d from './data.json'

type json_data = {
  info: {
    last_updated:string,
    season:string
  };
  players:playerObj[];
};

function App() {
  // get data from json server
  const [data, setData] = useState<playerObj[]>([]);
  const [season, setSeason] = useState<string>('');
  const [updated, setUpdated] = useState<string>('');

  useEffect(() => {
    const json_data:json_data = d;
    setData(json_data.players);
    setSeason(json_data.info.season);
    setUpdated(json_data.info.last_updated);
  }, []);
  console.log(data);

  const [players, setPlayers] = useState<playerObj[]>(data);
  useEffect(() => {
    setPlayers(data);
  }, [data]);
  const [watchlist, setWatchlist] = useState<playerObj[]>([]);
  const [team, setTeam] = useState<playerObj[]>([]);
  const [position, setPosition] = useState<playerObj[]>([]);
  const [player, setPlayer] = useState<playerObj|null>(null);

  // search bar function
  const handleSearch = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const value:string = e.currentTarget.value;
    // filter data for players who's name includes values from search bar
    let new_players = data.filter(p => {
      return p.playerInfo.player.name.toLowerCase().includes(value.toLowerCase());
    });
    setPlayers(new_players);
  }

  // get specific player for playerprofile page
  const handlePlayer = (e:React.MouseEvent<HTMLTableCellElement>) => {
    let player_id:number; 
    if (e.currentTarget.dataset.value !== undefined) {
      player_id = parseInt(e.currentTarget.dataset.value);
    }
    const target_player = data.filter(p => {
      return p.playerInfo.player.id === player_id;
    });
    setPlayer(target_player[0]);
    window.scrollTo({top: 0});
  }

  // add/remove players from watchlist
  const handleWatchlist = (e:React.MouseEvent<HTMLButtonElement>) => {
    const player_id:number = parseInt(e.currentTarget.value);
    players.forEach(p => {
      if (p.playerInfo.player.id === player_id) {
        // is player in watchlist?
        const in_watchlist:boolean = watchlist.some(w => w.playerInfo.player.id === player_id);
        if (in_watchlist) {
          // if player is already in watchlist, remove player
          const updated_watchlist:playerObj[] = watchlist.filter(w => w.playerInfo.player.id !== player_id);
          setWatchlist(updated_watchlist);
        } else {
          // if player is not in watchlist, add player
          setWatchlist([...watchlist, p]);
        }
      }
    });
  }

  // get team roster
  const handleTeam = (e:React.MouseEvent<HTMLButtonElement>) => {
    const team_id:number = parseInt(e.currentTarget.value);
    // filter data for all players on the same team
    const team_roster:playerObj[] = data.filter(p => {
      return p.playerInfo.player.team.id === team_id;
    }); 
    setTeam(team_roster);
    setPosition([]);
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
    const samePos:playerObj[] = data.filter(p => {
      return p.playerInfo.player.position.includes(targetPos);
    });
    setPosition(samePos);
    setTeam([]);
  }

  // reset teams/positions tables
  const handleReset = (e:React.MouseEvent<HTMLButtonElement>) => {
    setTeam([]);
    setPosition([]);
  }

  // clear player page
  const handlePlayerClose = (e:React.MouseEvent<HTMLButtonElement>) => {
    setPlayer(null);
  }

  return (
    <div className="App">
      <h5>Last Updated: {updated}</h5>
      <h5>Season: {season}</h5>
      <div className='content'>
        {player && 
          <div className='component-div'>
            <div>
              <h3>{player.playerInfo.player.name}</h3>
              <button className='close' onClick={handlePlayerClose}>Close</button>
            </div>
            <PlayerProfile player={player} handleTeam={handleTeam} handlePosition={handlePosition} />
          </div>
        }
        {watchlist.length > 0 && 
          <div className='component-div'>
            <h3>Watchlist</h3>
            <PlayerTable players={watchlist} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio1' />
          </div> 
        }
        {team.length > 0 && 
          <div className='component-div'>
            <div>
              <h3>{`${team[0].playerInfo.player.team.city} ${team[0].playerInfo.player.team.name}`}</h3>
              <button className='close' onClick={handleReset}>Close</button>
            </div>
            <PlayerTable players={team} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio2' />
          </div>
        }
        {position.length > 0 && 
          <div className='component-div'>
            <div>
              <h3>{posName}</h3>
              <button className='close' onClick={handleReset}>Close</button>
            </div>
            <PlayerTable players={position} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio3' />
          </div>
        }
        <div>
          <h3>Active Players</h3>
          <input id='search' autoFocus autoComplete='off' placeholder='Search Player' type='text' onKeyUp={handleSearch}></input>
        </div>
        <PlayerTable players={players} watchlist={watchlist} handlePlayer={handlePlayer} handleWatchlist={handleWatchlist} handleTeam={handleTeam} handlePosition={handlePosition} radioName='radio0' />
      </div>
    </div>
  );
}

export default App;
