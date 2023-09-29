import { player, team, game, player_obj } from './types';
import { useState, useEffect } from "react"
import DataTD from './DataTD';
import GamelogTable from './GamelogTable';

type PlayerProps = {
    player_obj: player_obj,
    teams: team[],
    games: game[],
    handleTeam: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handlePosition: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

function Player({ player_obj, teams, games, handleTeam, handlePosition }: PlayerProps) {
    const player:player = player_obj.player;
    const team:team = player_obj.team;
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
        const height_inches:number = player.height_inches;
        const feet:number = Math.floor(height_inches / 12);
        const inches:number = height_inches % 12;
        setHeight(`${feet}-${inches}`);
    }, [player]);

    return (
        <div>
            <ul>
                {team.city ? (
                    <li>Team: <button className='non-button' value={player.team_id} onClick={handleTeam}>{`${team.city} ${team.name}`}</button></li>
                ) : (
                    <li>Team: <button className='non-button' value={player.team_id} onClick={handleTeam}>{`${team.name}`}</button></li>
                )}
                <li>Position: {player.position.length > 0 ? (
                    player.position.map(pos => (
                        <button key={pos} className='non-button' value={pos} onClick={handlePosition}>{pos}</button>
                    ))
                    ) : (
                        <button className='non-button'></button>
                    )}
                </li>
                {player.jsy_number ? (
                    <li>Jersey Number: {player.jsy_number}</li>
                ) : (
                    <li>Jersey Number: N/A</li>
                )}
                
            </ul>
            <ul>
                <li>Height: {height}</li>
                <li>Weight: {player.weight_lbs}</li>
                <li>Years Active: {player.to_year - player.from_year}</li>
            </ul>
            <ul>
                <li>Draft: {player.draft_year ? (
                        `${player.draft_year}, Round ${player.draft_round}, Pick ${player.draft_number}`
                    ) : (
                        'Undrafted'
                    )}</li>
                <li>Last Attended: {player.last_attended}</li>
                <li>Country: {player.country}</li>
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
                <GamelogTable player_obj={player_obj} teams={teams} games={games} />
            }
        </div>
    )
}

export default Player;