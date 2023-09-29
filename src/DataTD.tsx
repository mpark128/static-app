import { player } from '../../data/types';

type DataTDProps = {
    player:player,
    format: string
}

function DataTD({ player, format }: DataTDProps) {
    return (
        format === 'totals' ? (
            <>
                <td className='boxscore-data'>{player.stats.totals.games_played}</td>
                <td className={player.z_score.totals.games_played > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.games_played.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.minutes}</td>
                <td className={player.z_score.totals.minutes > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.minutes.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.fgm}</td>
                <td className={player.z_score.totals.fgm > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.fgm.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.fga}</td>
                <td className={player.z_score.totals.fga > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.fga.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.fg_pct ? (player.stats.totals.fg_pct.toFixed(3)) : (null)}</td>
                <td className={player.z_score.totals.fg_pct !== null && player.z_score.totals.fg_pct > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.fg_pct ? (player.z_score.totals.fg_pct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.stats.totals.ftm}</td>
                <td className={player.z_score.totals.ftm > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.ftm.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.fta}</td>
                <td className={player.z_score.totals.fta > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.fta.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.ft_pct ? (player.stats.totals.ft_pct.toFixed(3)) : (null)}</td>
                <td className={player.z_score.totals.ft_pct !== null && player.z_score.totals.ft_pct > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.ft_pct ? (player.z_score.totals.ft_pct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.stats.totals.fg3m}</td>
                <td className={player.z_score.totals.fg3m > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.fg3m.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.fg3a}</td>
                <td className={player.z_score.totals.fg3a > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.fg3a.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.fg3_pct ? (player.stats.totals.fg3_pct.toFixed(3)) : (null)}</td>
                <td className={player.z_score.totals.fg3_pct !== null && player.z_score.totals.fg3_pct > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.fg3_pct ? (player.z_score.totals.fg3_pct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.stats.totals.pts}</td>
                <td className={player.z_score.totals.pts > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.pts.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.oreb}</td>
                <td className={player.z_score.totals.oreb > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.oreb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.dreb}</td>
                <td className={player.z_score.totals.dreb > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.dreb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.reb}</td>
                <td className={player.z_score.totals.reb > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.reb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.ast}</td>
                <td className={player.z_score.totals.ast > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.ast.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.stl}</td>
                <td className={player.z_score.totals.stl > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.stl.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.blk}</td>
                <td className={player.z_score.totals.blk > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.blk.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.tov}</td>
                <td className={player.z_score.totals.tov > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.tov.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.pf}</td>
                <td className={player.z_score.totals.pf > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.pf.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.plus_minus}</td>
                <td className={player.z_score.totals.plus_minus > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.plus_minus.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.totals.fantasy_pts.toFixed(1)}</td>
                <td className={player.z_score.totals.fantasy_pts > 0 ? 'positive z' : 'negative z'}>{player.z_score.totals.fantasy_pts.toFixed(2)}</td>
            </>
        ) : (
            <>
                <td className='boxscore-data'>{player.stats.avgs.games_played}</td>
                <td className={player.z_score.avgs.games_played > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.games_played.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.minutes.toFixed(1)}</td>
                <td className={player.z_score.avgs.minutes > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.minutes.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.fgm.toFixed(1)}</td>
                <td className={player.z_score.avgs.fgm > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.fgm.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.fga.toFixed(1)}</td>
                <td className={player.z_score.avgs.fga > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.fga.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.fg_pct ? (player.stats.avgs.fg_pct.toFixed(3)) : (null)}</td>
                <td className={player.z_score.avgs.fg_pct !== null && player.z_score.avgs.fg_pct > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.fg_pct ? (player.z_score.avgs.fg_pct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.stats.avgs.ftm.toFixed(1)}</td>
                <td className={player.z_score.avgs.ftm > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.ftm.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.fta.toFixed(1)}</td>
                <td className={player.z_score.avgs.fta > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.fta.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.ft_pct ? (player.stats.avgs.ft_pct.toFixed(3)) : (null)}</td>
                <td className={player.z_score.avgs.ft_pct !== null && player.z_score.avgs.ft_pct > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.ft_pct ? (player.z_score.avgs.ft_pct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.stats.avgs.fg3m.toFixed(1)}</td>
                <td className={player.z_score.avgs.fg3m > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.fg3m.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.fg3a.toFixed(1)}</td>
                <td className={player.z_score.avgs.fg3a > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.fg3a.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.fg3_pct ? (player.stats.avgs.fg3_pct.toFixed(3)) : (null)}</td>
                <td className={player.z_score.avgs.fg3_pct !== null && player.z_score.avgs.fg3_pct > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.fg3_pct ? (player.z_score.avgs.fg3_pct.toFixed(2)) : (null)}</td>
                <td className='boxscore-data'>{player.stats.avgs.pts.toFixed(1)}</td>
                <td className={player.z_score.avgs.pts > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.pts.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.oreb.toFixed(1)}</td>
                <td className={player.z_score.avgs.oreb > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.oreb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.dreb.toFixed(1)}</td>
                <td className={player.z_score.avgs.dreb > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.dreb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.reb.toFixed(1)}</td>
                <td className={player.z_score.avgs.reb > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.reb.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.ast.toFixed(1)}</td>
                <td className={player.z_score.avgs.ast > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.ast.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.stl.toFixed(1)}</td>
                <td className={player.z_score.avgs.stl > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.stl.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.blk.toFixed(1)}</td>
                <td className={player.z_score.avgs.blk > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.blk.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.tov.toFixed(1)}</td>
                <td className={player.z_score.avgs.tov > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.tov.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.pf.toFixed(1)}</td>
                <td className={player.z_score.avgs.pf > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.pf.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.plus_minus.toFixed(1)}</td>
                <td className={player.z_score.avgs.plus_minus > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.plus_minus.toFixed(2)}</td>
                <td className='boxscore-data'>{player.stats.avgs.fantasy_pts.toFixed(1)}</td>
                <td className={player.z_score.avgs.fantasy_pts > 0 ? 'positive z' : 'negative z'}>{player.z_score.avgs.fantasy_pts.toFixed(2)}</td>
            </>
        )
    )
}

export default DataTD;