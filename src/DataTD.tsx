import { playerObj } from '../../pern-app/types';

type DataTDProps = {
    player: playerObj,
    format: string
}

function DataTD({ player, format }: DataTDProps) {
    return (
        format === 'totals' ? (
            <>
                <td className='boxscore-data'>{player.playerInfo.totals.games}</td>
                <td className={player.zTotals.games > 0 ? 'positive z' : 'negative z'}>{player.zTotals.games.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.minutes}</td>
                <td className={player.zTotals.minutes > 0 ? 'positive z' : 'negative z'}>{player.zTotals.minutes.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.fgm}</td>
                <td className={player.zTotals.fgm > 0 ? 'positive z' : 'negative z'}>{player.zTotals.fgm.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.fga}</td>
                <td className={player.zTotals.fga > 0 ? 'positive z' : 'negative z'}>{player.zTotals.fga.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.fgPct ? (player.playerInfo.totals.fgPct.toFixed(3)) : (null)}</td>
                <td className={player.zTotals.fgPct !== null && player.zTotals.fgPct > 0 ? 'positive z' : 'negative z'}>{player.zTotals.fgPct ? (player.zTotals.fgPct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.ftm}</td>
                <td className={player.zTotals.ftm > 0 ? 'positive z' : 'negative z'}>{player.zTotals.ftm.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.fta}</td>
                <td className={player.zTotals.fta > 0 ? 'positive z' : 'negative z'}>{player.zTotals.fta.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.ftPct ? (player.playerInfo.totals.ftPct.toFixed(3)) : (null)}</td>
                <td className={player.zTotals.ftPct !== null && player.zTotals.ftPct > 0 ? 'positive z' : 'negative z'}>{player.zTotals.ftPct ? (player.zTotals.ftPct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.fg3m}</td>
                <td className={player.zTotals.fg3m > 0 ? 'positive z' : 'negative z'}>{player.zTotals.fg3m.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.fg3a}</td>
                <td className={player.zTotals.fg3a > 0 ? 'positive z' : 'negative z'}>{player.zTotals.fg3a.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.fg3Pct ? (player.playerInfo.totals.fg3Pct.toFixed(3)) : (null)}</td>
                <td className={player.zTotals.fg3Pct !== null && player.zTotals.fg3Pct > 0 ? 'positive z' : 'negative z'}>{player.zTotals.fg3Pct ? (player.zTotals.fg3Pct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.pts}</td>
                <td className={player.zTotals.pts > 0 ? 'positive z' : 'negative z'}>{player.zTotals.pts.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.oreb}</td>
                <td className={player.zTotals.oreb > 0 ? 'positive z' : 'negative z'}>{player.zTotals.oreb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.dreb}</td>
                <td className={player.zTotals.dreb > 0 ? 'positive z' : 'negative z'}>{player.zTotals.dreb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.reb}</td>
                <td className={player.zTotals.reb > 0 ? 'positive z' : 'negative z'}>{player.zTotals.reb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.ast}</td>
                <td className={player.zTotals.ast > 0 ? 'positive z' : 'negative z'}>{player.zTotals.ast.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.stl}</td>
                <td className={player.zTotals.stl > 0 ? 'positive z' : 'negative z'}>{player.zTotals.stl.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.blk}</td>
                <td className={player.zTotals.blk > 0 ? 'positive z' : 'negative z'}>{player.zTotals.blk.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.tov}</td>
                <td className={player.zTotals.tov > 0 ? 'positive z' : 'negative z'}>{player.zTotals.tov.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.pf}</td>
                <td className={player.zTotals.pf > 0 ? 'positive z' : 'negative z'}>{player.zTotals.pf.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.plusMinus}</td>
                <td className={player.zTotals.plusMinus > 0 ? 'positive z' : 'negative z'}>{player.zTotals.plusMinus.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.totals.fantasyPts.toFixed(1)}</td>
                <td className={player.zTotals.fantasyPts > 0 ? 'positive z' : 'negative z'}>{player.zTotals.fantasyPts.toFixed(2)}</td>
            </>
        ) : (
            <>
                <td className='boxscore-data'>{player.playerInfo.avgs.games}</td>
                <td className={player.zAvgs.games > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.games.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.minutes.toFixed(1)}</td>
                <td className={player.zAvgs.minutes > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.minutes.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.fgm.toFixed(1)}</td>
                <td className={player.zAvgs.fgm > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.fgm.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.fga.toFixed(1)}</td>
                <td className={player.zAvgs.fga > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.fga.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.fgPct ? (player.playerInfo.avgs.fgPct.toFixed(3)) : (null)}</td>
                <td className={player.zAvgs.fgPct !== null && player.zAvgs.fgPct > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.fgPct ? (player.zAvgs.fgPct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.ftm.toFixed(1)}</td>
                <td className={player.zAvgs.ftm > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.ftm.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.fta.toFixed(1)}</td>
                <td className={player.zAvgs.fta > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.fta.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.ftPct ? (player.playerInfo.avgs.ftPct.toFixed(3)) : (null)}</td>
                <td className={player.zAvgs.ftPct !== null && player.zAvgs.ftPct > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.ftPct ? (player.zAvgs.ftPct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.fg3m.toFixed(1)}</td>
                <td className={player.zAvgs.fg3m > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.fg3m.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.fg3a.toFixed(1)}</td>
                <td className={player.zAvgs.fg3a > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.fg3a.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.fg3Pct ? (player.playerInfo.avgs.fg3Pct.toFixed(3)) : (null)}</td>
                <td className={player.zAvgs.fg3Pct !== null && player.zAvgs.fg3Pct > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.fg3Pct ? (player.zAvgs.fg3Pct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.pts.toFixed(1)}</td>
                <td className={player.zAvgs.pts > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.pts.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.oreb.toFixed(1)}</td>
                <td className={player.zAvgs.oreb > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.oreb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.dreb.toFixed(1)}</td>
                <td className={player.zAvgs.dreb > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.dreb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.reb.toFixed(1)}</td>
                <td className={player.zAvgs.reb > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.reb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.ast.toFixed(1)}</td>
                <td className={player.zAvgs.ast > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.ast.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.stl.toFixed(1)}</td>
                <td className={player.zAvgs.stl > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.stl.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.blk.toFixed(1)}</td>
                <td className={player.zAvgs.blk > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.blk.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.tov.toFixed(1)}</td>
                <td className={player.zAvgs.tov > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.tov.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.pf.toFixed(1)}</td>
                <td className={player.zAvgs.pf > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.pf.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.plusMinus.toFixed(1)}</td>
                <td className={player.zAvgs.plusMinus > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.plusMinus.toFixed(2)}</td>
                <td className='boxscore-data'>{player.playerInfo.avgs.fantasyPts.toFixed(1)}</td>
                <td className={player.zAvgs.fantasyPts > 0 ? 'positive z' : 'negative z'}>{player.zAvgs.fantasyPts.toFixed(2)}</td>
            </>
        )
    )
}

export default DataTD;