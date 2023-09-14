import { boxscore, playerObj, Team, Player, Gamelog } from '../../pern-app/types';
import { useState, useEffect } from "react"
import DataTD from './DataTD';

type PlayerTableProps = {
    players: playerObj[],
    watchlist: playerObj[],
    handlePlayer: (e: React.MouseEvent<HTMLTableCellElement>) => void,
    handleWatchlist: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handleTeam: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    handlePosition: (e: React.MouseEvent<HTMLButtonElement>) => void,
    radioName: string
}

function PlayerTable({ players, watchlist, handlePlayer, handleWatchlist, handleTeam, handlePosition, radioName }: PlayerTableProps) {
    const [playersData, setPlayersData] = useState<playerObj[]>(players);
    useEffect(() => {
        setPlayersData(players);
    }, [players]);

    // set radio buttons
    const [format, setFormat] = useState<string>('totals');
    const handleFormatChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormat(e.currentTarget.value);
    }

    // sort table by column
    const handleSortStats = (key:keyof boxscore, format:string) => {
        const sortDesc = (a:playerObj, b:playerObj, key:keyof boxscore):number => {
            let valueA:number|null = null;
            let valueB:number|null = null;

            if (format === 'totals') {
                valueA = a.playerInfo.totals[key]; 
                valueB = b.playerInfo.totals[key]; 
            } else if (format === 'avgs') {
                valueA = a.playerInfo.avgs[key]; 
                valueB = b.playerInfo.avgs[key]; 
            }

            if (valueA === null) {
                valueA = -1;
            } 
            if (valueB === null) {
                valueB = -1;
            }
            return valueB - valueA;
        }
        setPlayersData(playersData => [...playersData].sort((a, b) => sortDesc(a, b, key)));
    };

    return (
        <div>
            <div className="stats-format">
                <label>
                    <input type="radio" name={radioName} value="totals" checked={format === 'totals'} onChange={handleFormatChange}></input>Totals
                </label>
                <label>
                    <input type="radio" name={radioName} value="avgs" checked={format === 'avgs'} onChange={handleFormatChange}></input>Averages
                </label>
            </div>
            <div className='player-table'>
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Name</td>
                            <td>Team</td>
                            <td>Pos</td>
                            <td className='clickable' onClick={() => handleSortStats('games', format)}>GP</td>
                            <td className='clickable' onClick={() => handleSortStats('games', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('minutes', format)}>MIN</td>
                            <td className='clickable' onClick={() => handleSortStats('minutes', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('fgm', format)}>FGM</td>
                            <td className='clickable' onClick={() => handleSortStats('fgm', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('fga', format)}>FGA</td>
                            <td className='clickable' onClick={() => handleSortStats('fga', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('fgPct', format)}>FG%</td>
                            <td className='clickable' onClick={() => handleSortStats('fgPct', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('ftm', format)}>FTM</td>
                            <td className='clickable' onClick={() => handleSortStats('ftm', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('fta', format)}>FTA</td>
                            <td className='clickable' onClick={() => handleSortStats('fta', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('ftPct', format)}>FT%</td>
                            <td className='clickable' onClick={() => handleSortStats('ftPct', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('fg3m', format)}>3PM</td>
                            <td className='clickable' onClick={() => handleSortStats('fg3m', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('fg3a', format)}>3PA</td>
                            <td className='clickable' onClick={() => handleSortStats('fg3a', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('fg3Pct', format)}>3P%</td>
                            <td className='clickable' onClick={() => handleSortStats('fg3Pct', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('pts', format)}>PTS</td>
                            <td className='clickable' onClick={() => handleSortStats('pts', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('oreb', format)}>ORB</td>
                            <td className='clickable' onClick={() => handleSortStats('oreb', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('dreb', format)}>DRB</td>
                            <td className='clickable' onClick={() => handleSortStats('dreb', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('reb', format)}>REB</td>
                            <td className='clickable' onClick={() => handleSortStats('reb', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('ast', format)}>AST</td>
                            <td className='clickable' onClick={() => handleSortStats('ast', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('stl', format)}>STL</td>
                            <td className='clickable' onClick={() => handleSortStats('stl', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('blk', format)}>BLK</td>
                            <td className='clickable' onClick={() => handleSortStats('blk', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('tov', format)}>TOV</td>
                            <td className='clickable' onClick={() => handleSortStats('tov', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('pf', format)}>PF</td>
                            <td className='clickable' onClick={() => handleSortStats('pf', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('plusMinus', format)}>+/-</td>
                            <td className='clickable' onClick={() => handleSortStats('plusMinus', format)}>z</td>
                            <td className='clickable' onClick={() => handleSortStats('fantasyPts', format)}>FPT</td>
                            <td className='clickable' onClick={() => handleSortStats('fantasyPts', format)}>z</td>
                        </tr>
                    </thead>
                    <tbody>
                        {playersData.map(p => (
                            <tr id={p.playerInfo.player.slug} key={p.playerInfo.player.id}>
                                {watchlist.some(w => w.playerInfo.player.id === p.playerInfo.player.id) ? (
                                    <td className='no-borders'><button className='watchlist-remove' value={p.playerInfo.player.id} onClick={handleWatchlist}>-</button></td>
                                ) : (
                                    <td className='no-borders'><button className='watchlist-add' value={p.playerInfo.player.id} onClick={handleWatchlist}>+</button></td>
                                )}
                                <td className='clickable' onClick={handlePlayer} data-value={p.playerInfo.player.id}>{p.playerInfo.player.name}</td>
                                <td><button className='non-button' value={p.playerInfo.player.team.id} onClick={handleTeam}>{p.playerInfo.player.team.abbreviation}</button></td>
                                <td>{p.playerInfo.player.position.length > 0 ? (
                                    p.playerInfo.player.position.map(pos => (
                                        <button key={pos} className='non-button' value={pos} onClick={handlePosition}>{pos}</button>
                                    ))
                                    ) : (
                                        <button className='non-button'></button>
                                    )}
                                </td>
                                <DataTD player={p} format={format} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayerTable;