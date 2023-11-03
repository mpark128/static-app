import { boxscore } from './types';

type ValueTDProps = {
    boxscore:boxscore
};

function ValueTD({ boxscore }: ValueTDProps) {
    return (
        <>
            <td className={boxscore.games_played > 0 ? 'positive v' : 'negative v'}>{boxscore.games_played.toFixed(2)}</td>
            <td className={boxscore.minutes > 0 ? 'positive v' : 'negative v'}>{boxscore.minutes.toFixed(2)}</td>
            <td className={boxscore.fgm > 0 ? 'positive v' : 'negative v'}>{boxscore.fgm.toFixed(2)}</td>
            <td className={boxscore.fga > 0 ? 'positive v' : 'negative v'}>{boxscore.fga.toFixed(2)}</td>
            <td className={boxscore.fg_pct !== null && boxscore.fg_pct > 0 ? 'positive v' : 'negative v'}>{boxscore.fg_pct ? (boxscore.fg_pct.toFixed(2)) : (null)}</td>
            <td className={boxscore.ftm > 0 ? 'positive v' : 'negative v'}>{boxscore.ftm.toFixed(2)}</td>
            <td className={boxscore.fta > 0 ? 'positive v' : 'negative v'}>{boxscore.fta.toFixed(2)}</td>
            <td className={boxscore.ft_pct !== null && boxscore.ft_pct > 0 ? 'positive v' : 'negative v'}>{boxscore.ft_pct ? (boxscore.ft_pct.toFixed(2)) : (null)}</td>
            <td className={boxscore.fg3m > 0 ? 'positive v' : 'negative v'}>{boxscore.fg3m.toFixed(2)}</td>
            <td className={boxscore.fg3a > 0 ? 'positive v' : 'negative v'}>{boxscore.fg3a.toFixed(2)}</td>
            <td className={boxscore.fg3_pct !== null && boxscore.fg3_pct > 0 ? 'positive v' : 'negative v'}>{boxscore.fg3_pct ? (boxscore.fg3_pct.toFixed(2)) : (null)}</td>
            <td className={boxscore.pts > 0 ? 'positive v' : 'negative v'}>{boxscore.pts.toFixed(2)}</td>
            <td className={boxscore.oreb > 0 ? 'positive v' : 'negative v'}>{boxscore.oreb.toFixed(2)}</td>
            <td className={boxscore.dreb > 0 ? 'positive v' : 'negative v'}>{boxscore.dreb.toFixed(2)}</td>
            <td className={boxscore.reb > 0 ? 'positive v' : 'negative v'}>{boxscore.reb.toFixed(2)}</td>
            <td className={boxscore.ast > 0 ? 'positive v' : 'negative v'}>{boxscore.ast.toFixed(2)}</td>
            <td className={boxscore.stl > 0 ? 'positive v' : 'negative v'}>{boxscore.stl.toFixed(2)}</td>
            <td className={boxscore.blk > 0 ? 'positive v' : 'negative v'}>{boxscore.blk.toFixed(2)}</td>
            <td className={boxscore.tov > 0 ? 'positive v' : 'negative v'}>{boxscore.tov.toFixed(2)}</td>
            <td className={boxscore.pf > 0 ? 'positive v' : 'negative v'}>{boxscore.pf.toFixed(2)}</td>
            <td className={boxscore.plus_minus > 0 ? 'positive v' : 'negative v'}>{boxscore.plus_minus.toFixed(2)}</td>
            <td className={boxscore.fantasy_pts > 0 ? 'positive v' : 'negative v'}>{boxscore.fantasy_pts.toFixed(2)}</td>
        </>
    )
}

export default ValueTD;