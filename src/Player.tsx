import { player, team, game, player_obj } from './types';
import { useState, useEffect } from "react"
import DataTD from './DataTD';
import ValueTD from './ValueTD';
import GamelogTable from './GamelogTable';

type PlayerProps = {
    player: player_obj,
    teams: team[],
    games: game[],
    handleTeam: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handlePosition: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

function Player({ player, teams, games, handleTeam, handlePosition }: PlayerProps) {
    const team = teams.find(t => t.id === player.player.team_id) as team;
    // display / hide gamelogs
    const [showGamelogs, setShowGamelogs] = useState<boolean>(false);
    const handleGamelogs = (e:React.MouseEvent<HTMLButtonElement>) => {
        if (showGamelogs) {
            setShowGamelogs(false);
        } else {
            setShowGamelogs(true);
        }
    }
    const [height, setHeight] = useState<string>('');
    useEffect(() => {
        const height_inches:number = player.player.height_inches;
        const feet:number = Math.floor(height_inches / 12);
        const inches:number = height_inches % 12;
        setHeight(`${feet}-${inches}`);
    }, [player]);

    return (
        <div>
            <ul>
                {team.city ? (
                    <li>Team: <button className='non-button' value={team.id} onClick={handleTeam}>{`${team.city} ${team.name}`}</button></li>
                ) : (
                    <li>Team: <button className='non-button' value={team.id} onClick={handleTeam}>{`${team.name}`}</button></li>
                )}
                <li>Position: {player.player.position.length > 0 ? (
                    player.player.position.map(pos => (
                        <button key={pos} className='non-button' value={pos} onClick={handlePosition}>{pos}</button>
                    ))
                    ) : (
                        <button className='non-button'></button>
                    )}
                </li>
                {player.player.jsy_number ? (
                    <li>Jersey Number: {player.player.jsy_number}</li>
                ) : (
                    <li>Jersey Number: N/A</li>
                )}
                
            </ul>
            <ul>
                <li>Height: {height}</li>
                <li>Weight: {player.player.weight_lbs}</li>
                <li>Years Active: {player.player.to_year - player.player.from_year}</li>
            </ul>
            <ul>
                <li>Draft: {player.player.draft_year ? (
                        `${player.player.draft_year}, Round ${player.player.draft_round}, Pick ${player.player.draft_number}`
                    ) : (
                        'Undrafted'
                    )}</li>
                <li>Last Attended: {player.player.last_attended}</li>
                <li>Country: {player.player.country}</li>
            </ul>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <td></td>
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
                            <td>3P%</td>
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
                        <tr>
                            <td className='no-borders'>Totals</td>
                            <DataTD boxscore={player.stats.counting_stats.totals} />
                        </tr>
                        <tr>
                            <td className='no-borders'>Z-Totals</td>
                            <ValueTD boxscore={player.stats.z_score.totals} />
                        </tr>
                        <tr>
                            <td className='no-borders'>Averages</td>
                            <DataTD boxscore={player.stats.counting_stats.avgs}/>
                        </tr>
                        <tr>
                            <td className='no-borders'>Z-Avgs</td>
                            <ValueTD boxscore={player.stats.z_score.avgs} />
                        </tr>
                    </tbody>
                </table>
            </div>  
                
            <button className='gamelog-button' onClick={handleGamelogs}>{showGamelogs ? ('Hide Gamelogs') : ('Show Gamelogs')}</button> 
            {showGamelogs && 
                <GamelogTable player={player} teams={teams} games={games} />
            }
        </div>
    )
}

export default Player;