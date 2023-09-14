import { boxscore, playerObj, Team, Player, Gamelog } from '../../pern-app/types';
import { useState, useEffect } from "react"
import DataTD from './DataTD';

type PlayerProps = {
    player: playerObj,
    handleTeam: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handlePosition: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

function PlayerProfile({ player, handleTeam, handlePosition }: PlayerProps) {
    const [playerData, setPlayerData] = useState<object>({});
    // get common player info
    useEffect(() => {
        const headerData = {
            'Connection': 'keep-alive',
            'Accept': 'application/json, text/plain, */*',
            'x-nba-stats-token': 'true',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
            'x-nba-stats-origin': 'stats',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Referer': 'https://stats.nba.com/',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
        };
        let url = new URL('https://stats.nba.com/stats/commonplayerinfo');
        let params = new URLSearchParams({
            PlayerID: player.playerInfo.player.id.toString()
        });
        url.search = params.toString();
        fetch(url, {headers: headerData})
        .then(res => res.json())
        .then(data => {
            setPlayerData(data);
        })
        .catch((err) => {
            console.log(err);
        });
    },[player]);      
    console.log(playerData);

    // display / hide gamelogs
    const [showGamelogs, setShowGamelogs] = useState<boolean>(false);
    const handleGamelogs = (e:React.MouseEvent<HTMLButtonElement>) => {
        if (showGamelogs) {
            setShowGamelogs(false);
        } else {
            setShowGamelogs(true);
        }
    }

    const formatDate = (d:Date):string => {
        const formattedDate:string = d.toLocaleString();
        let date:string[] = formattedDate.split('T');
        return date[0];
    }

    return (
        <div>
            <ul>
                <li>Team: {player.playerInfo.player.team.id === 0 ? (<button className='non-button' value={player.playerInfo.player.team.id} onClick={handleTeam}>{player.playerInfo.player.team.abbreviation}</button>) : (<button className='non-button' value={player.playerInfo.player.team.id} onClick={handleTeam}>{`${player.playerInfo.player.team.city} ${player.playerInfo.player.team.name} - #${player.playerInfo.player.jsyNumber}`}</button>)}</li>
                <li>Position: {player.playerInfo.player.position.length > 0 ? (
                    player.playerInfo.player.position.map(pos => (
                        <button key={pos} className='non-button' value={pos} onClick={handlePosition}>{pos}</button>
                    ))
                    ) : (
                        <button className='non-button'></button>
                    )}
                </li>
                <li>Age: </li>
                <li>Years Active: {player.playerInfo.player.toYear - player.playerInfo.player.fromYear}</li>
            </ul>
            <ul>
                <li>Height: </li>
                <li>Weight: {player.playerInfo.player.weightLbs}</li>
                <li>Wingspan: </li>
                <li>Standing Reach: </li>
            </ul>
            <ul>
                <li>Birthday: </li>
                <li>Draft: {`${player.playerInfo.player.draftYear}, Round ${player.playerInfo.player.draftRound}, Pick ${player.playerInfo.player.draftNumber}`}</li>
                <li>Last Attended: {player.playerInfo.player.lastPlayed}</li>
                <li>Country: {player.playerInfo.player.country}</li>
            </ul>  
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>GP</td>
                        <td>z</td>
                        <td>MIN</td>
                        <td>z</td>
                        <td>FGM</td>
                        <td>z</td>
                        <td>FGA</td>
                        <td>z</td>
                        <td>FG%</td>
                        <td>z</td>
                        <td>FTM</td>
                        <td>z</td>
                        <td>FTA</td>
                        <td>z</td>
                        <td>FT%</td>
                        <td>z</td>
                        <td>3PM</td>
                        <td>z</td>
                        <td>3PA</td>
                        <td>z</td>
                        <td>3PT%</td>
                        <td>z</td>
                        <td>PTS</td>
                        <td>z</td>
                        <td>ORB</td>
                        <td>z</td>
                        <td>DRB</td>
                        <td>z</td>
                        <td>REB</td>
                        <td>z</td>
                        <td>AST</td>
                        <td>z</td>
                        <td>STL</td>
                        <td>z</td>
                        <td>BLK</td>
                        <td>z</td>
                        <td>TOV</td>
                        <td>z</td>
                        <td>PF</td>
                        <td>z</td>
                        <td>+/-</td>
                        <td>z</td>
                        <td>FPT</td>
                        <td>z</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='no-borders'>Totals</td>
                        <DataTD player={player} format='totals' />
                    </tr>
                    <tr>
                        <td className='no-borders'>Averages</td>
                        <DataTD player={player} format='avgs' />
                    </tr>
                </tbody>
            </table>
            <button className='gamelog-button' onClick={handleGamelogs}>{showGamelogs ? ('Hide Gamelogs') : ('Show Gamelogs')}</button> 
            {showGamelogs && 
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Matchup</td>
                            <td>Result</td>
                            <td>GP</td>
                            <td>MIN</td>
                            <td>FGM</td>
                            <td>FGA</td>
                            <td>FG%</td>
                            <td>FTM</td>
                            <td>FTA</td>
                            <td>FT%</td>
                            <td>3PM</td>
                            <td>3PA</td>
                            <td>3PT%</td>
                            <td>PTS</td>
                            <td>ORB</td>
                            <td>DRB</td>
                            <td>REB</td>
                            <td>AST</td>
                            <td>STL</td>
                            <td>BLK</td>
                            <td>TOV</td>
                            <td>PF</td>
                            <td>+/-</td>
                            <td>FPT</td>
                        </tr>
                    </thead>
                    <tbody>
                        {player.playerInfo.gamelogs.map(g => (
                            <tr key={g.gameId}>
                                <td>{g.date}</td>
                                <td>{g.matchup}</td>
                                <td>{g.WL}</td>
                                <td>{g.stats.games}</td>
                                <td>{g.stats.minutes}</td>
                                <td>{g.stats.fgm}</td>
                                <td>{g.stats.fga}</td>
                                <td>{g.stats.fgPct}</td>
                                <td>{g.stats.ftm}</td>
                                <td>{g.stats.fta}</td>
                                <td>{g.stats.ftPct}</td>
                                <td>{g.stats.fg3m}</td>
                                <td>{g.stats.fg3a}</td>
                                <td>{g.stats.fg3Pct}</td>
                                <td>{g.stats.pts}</td>
                                <td>{g.stats.oreb}</td>
                                <td>{g.stats.dreb}</td>
                                <td>{g.stats.reb}</td>
                                <td>{g.stats.ast}</td>
                                <td>{g.stats.stl}</td>
                                <td>{g.stats.blk}</td>
                                <td>{g.stats.tov}</td>
                                <td>{g.stats.pf}</td>
                                <td>{g.stats.plusMinus}</td>
                                <td>{g.stats.fantasyPts}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default PlayerProfile;