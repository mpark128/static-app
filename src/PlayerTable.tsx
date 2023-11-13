import { boxscore, team, player_obj } from './types';
import { useState, useEffect } from "react"
import DataTD from './DataTD';
import ValueTD from './ValueTD';

type PlayerTableProps = {
    players: player_obj[],
    teams: team[],
    watchlist: player_obj[],
    handlePlayer: (e: React.MouseEvent<HTMLTableCellElement>) => void,
    handleWatchlist: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handleTeam: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    handlePosition: (e: React.MouseEvent<HTMLButtonElement>) => void,
    radioName: string
}

function PlayerTable({ players, teams, watchlist, handlePlayer, handleWatchlist, handleTeam, handlePosition, radioName }: PlayerTableProps) {
    const [playersData, setPlayersData] = useState<player_obj[]>(players);
    useEffect(() => {
        setPlayersData(players);
    }, [players]);

    // set radio buttons
    const [format, setFormat] = useState<string>('avgs');
    const handleFormatChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormat(e.currentTarget.value);
    }

    // sort table by column
    const handleSortData = (key:keyof boxscore, format:string):void => {
        const sortDesc = (a:player_obj, b:player_obj, key:keyof boxscore):number => {
            let valueA:number|null = null;
            let valueB:number|null = null;

            if (format === 'totals') {
                valueA = a.stats.counting_stats.totals[key]; 
                valueB = b.stats.counting_stats.totals[key]; 
            } else if (format === 'avgs') {
                valueA = a.stats.counting_stats.avgs[key]; 
                valueB = b.stats.counting_stats.avgs[key]; 
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
    const handleSortFvalue = (format:string):void => {
        const sortDesc = (a:player_obj, b:player_obj):number => {
            let valueA:number|null = null;
            let valueB:number|null = null;

            if (format === 'totals') {
                valueA = a.stats.z_score.value.totals; 
                valueB = b.stats.z_score.value.totals; 
            } else if (format === 'avgs') {
                valueA = a.stats.z_score.value.avgs; 
                valueB = b.stats.z_score.value.avgs; 
            }

            if (valueA === null) {
                valueA = -1;
            } 
            if (valueB === null) {
                valueB = -1;
            }
            return valueB - valueA;
        }
        setPlayersData(playersData => [...playersData].sort((a, b) => sortDesc(a, b)));
    };
    const handleSortNames = ():void => {
        const sortAsc = (a:player_obj, b:player_obj):number => {
            let valueA:string = a.player.last_name;
            let valueB:string = b.player.last_name;

            return valueA.localeCompare(valueB);
        }
        setPlayersData(playersData => [...playersData].sort((a, b) => sortAsc(a, b)));
    };

    return (
        <div className='container'>
            <div className="table-format">
                Stats Format:
                <label>
                    <input type="radio" name={radioName} value="avgs" checked={format === 'avgs'} onChange={handleFormatChange}></input>Averages
                </label>
                <label>
                    <input type="radio" name={radioName} value="totals" checked={format === 'totals'} onChange={handleFormatChange}></input>Totals
                </label>
            </div>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='table-header table-left table-right' colSpan={22}>Counting Stats</td>
                            <td className='table-header table-left table-right' colSpan={22}>Values</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='clickable' onClick={() => handleSortNames()}>Name</td>
                            <td>Team</td>
                            <td>Pos</td>
                            <td className='clickable' onClick={() => handleSortFvalue(format)}>Fantasy Value</td>
                            <td className='clickable table-left' onClick={() => handleSortData('games_played', format)}>GP</td>
                            <td className='clickable' onClick={() => handleSortData('minutes', format)}>MIN</td>
                            <td className='clickable' onClick={() => handleSortData('fgm', format)}>FGM</td>
                            <td className='clickable' onClick={() => handleSortData('fga', format)}>FGA</td>
                            <td className='clickable' onClick={() => handleSortData('fg_pct', format)}>FG%</td>
                            <td className='clickable' onClick={() => handleSortData('ftm', format)}>FTM</td>
                            <td className='clickable' onClick={() => handleSortData('fta', format)}>FTA</td>
                            <td className='clickable' onClick={() => handleSortData('ft_pct', format)}>FT%</td>
                            <td className='clickable' onClick={() => handleSortData('fg3m', format)}>3PM</td>
                            <td className='clickable' onClick={() => handleSortData('fg3a', format)}>3PA</td>
                            <td className='clickable' onClick={() => handleSortData('fg3_pct', format)}>3P%</td>
                            <td className='clickable' onClick={() => handleSortData('pts', format)}>PTS</td>
                            <td className='clickable' onClick={() => handleSortData('oreb', format)}>ORB</td>
                            <td className='clickable' onClick={() => handleSortData('dreb', format)}>DRB</td>
                            <td className='clickable' onClick={() => handleSortData('reb', format)}>REB</td>
                            <td className='clickable' onClick={() => handleSortData('ast', format)}>AST</td>
                            <td className='clickable' onClick={() => handleSortData('stl', format)}>STL</td>
                            <td className='clickable' onClick={() => handleSortData('blk', format)}>BLK</td>
                            <td className='clickable' onClick={() => handleSortData('tov', format)}>TOV</td>
                            <td className='clickable' onClick={() => handleSortData('pf', format)}>PF</td>
                            <td className='clickable' onClick={() => handleSortData('plus_minus', format)}>+/-</td>
                            <td className='clickable table-right' onClick={() => handleSortData('fantasy_pts', format)}>FPT</td>

                            <td className='clickable table-left' onClick={() => handleSortData('games_played', format)}>GP-V</td>
                            <td className='clickable' onClick={() => handleSortData('minutes', format)}>MIN-V</td>
                            <td className='clickable' onClick={() => handleSortData('fgm', format)}>FGM-V</td>
                            <td className='clickable' onClick={() => handleSortData('fga', format)}>FGA-V</td>
                            <td className='clickable' onClick={() => handleSortData('fg_pct', format)}>FG%-V</td>
                            <td className='clickable' onClick={() => handleSortData('ftm', format)}>FTM-V</td>
                            <td className='clickable' onClick={() => handleSortData('fta', format)}>FTA-V</td>
                            <td className='clickable' onClick={() => handleSortData('ft_pct', format)}>FT%-V</td>
                            <td className='clickable' onClick={() => handleSortData('fg3m', format)}>3PM-V</td>
                            <td className='clickable' onClick={() => handleSortData('fg3a', format)}>3PA-V</td>
                            <td className='clickable' onClick={() => handleSortData('fg3_pct', format)}>3P%-V</td>
                            <td className='clickable' onClick={() => handleSortData('pts', format)}>PTS-V</td>
                            <td className='clickable' onClick={() => handleSortData('oreb', format)}>ORB-V</td>
                            <td className='clickable' onClick={() => handleSortData('dreb', format)}>DRB-V</td>
                            <td className='clickable' onClick={() => handleSortData('reb', format)}>REB-V</td>
                            <td className='clickable' onClick={() => handleSortData('ast', format)}>AST-V</td>
                            <td className='clickable' onClick={() => handleSortData('stl', format)}>STL-V</td>
                            <td className='clickable' onClick={() => handleSortData('blk', format)}>BLK-V</td>
                            <td className='clickable' onClick={() => handleSortData('tov', format)}>TOV-V</td>
                            <td className='clickable' onClick={() => handleSortData('pf', format)}>PF-V</td>
                            <td className='clickable' onClick={() => handleSortData('plus_minus', format)}>+/- V</td>
                            <td className='clickable table-right' onClick={() => handleSortData('fantasy_pts', format)}>FPT-V</td>
                        </tr>
                    </thead>
                    <tbody>
                        {playersData.map(p => (
                            <tr id={p.player.slug} key={p.player.id}>
                                {watchlist.some(w => w.player.id === p.player.id) ? (
                                    <td className='no-borders'><button className='watchlist-remove' value={p.player.id} onClick={handleWatchlist}>-</button></td>
                                ) : (
                                    <td className='no-borders'><button className='watchlist-add' value={p.player.id} onClick={handleWatchlist}>+</button></td>
                                )}
                                <td className='clickable' onClick={handlePlayer} data-value={p.player.id}>{`${p.player.first_name} ${p.player.last_name}`}</td>
                                <td><button className='non-button' value={p.player.team_id} onClick={handleTeam}>{teams.find(team => team.player_ids.includes(p.player.id))?.abbreviation}</button></td>
                                <td>{p.player.position.length > 0 ? (
                                    p.player.position.map(pos => (
                                        <button key={pos} className='non-button' value={pos} onClick={handlePosition}>{pos}</button>
                                    ))
                                    ) : (
                                        <button className='non-button'></button>
                                    )}
                                </td>
                                {format === 'totals' ? (
                                    <>
                                        <td className={p.stats.z_score.value.totals > 0 ? 'positive v' : 'negative v'}>{p.stats.z_score.value.totals.toFixed(2)}</td>
                                        <DataTD boxscore={p.stats.counting_stats.totals} />
                                        <ValueTD boxscore={p.stats.z_score.totals} />
                                    </>
                                ) : (
                                    <>
                                        <td className={p.stats.z_score.value.avgs > 0 ? 'positive v' : 'negative v'}>{p.stats.z_score.value.avgs.toFixed(2)}</td>
                                        <DataTD boxscore={p.stats.counting_stats.avgs} />
                                        <ValueTD boxscore={p.stats.z_score.avgs} />
                                    </>
                                )} 
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayerTable;