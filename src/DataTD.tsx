import { boxscore } from './types';

type DataTDProps = {
    boxscore:boxscore
};

function DataTD({ boxscore }: DataTDProps) {
    const is_float = (x:number):boolean => {
        return x % 1 !== 0;
    };

    return (
        <>
            <td className='boxscore-data'>{boxscore.games_played}</td>
            <td className='boxscore-data'>{is_float(boxscore.minutes) ? (boxscore.minutes.toFixed(1)) : (boxscore.minutes)}</td>
            <td className='boxscore-data'>{is_float(boxscore.fgm) ? (boxscore.fgm.toFixed(1)) : (boxscore.fgm)}</td>
            <td className='boxscore-data'>{is_float(boxscore.fga) ? (boxscore.fga.toFixed(1)) : (boxscore.fga)}</td>
            <td className='boxscore-data'>{boxscore.fg_pct ? (boxscore.fg_pct.toFixed(3)) : (null)}</td>
            <td className='boxscore-data'>{is_float(boxscore.ftm) ? (boxscore.ftm.toFixed(1)) : (boxscore.ftm)}</td>
            <td className='boxscore-data'>{is_float(boxscore.fta) ? (boxscore.fta.toFixed(1)) : (boxscore.fta)}</td>
            <td className='boxscore-data'>{boxscore.ft_pct ? (boxscore.ft_pct.toFixed(3)) : (null)}</td>
            <td className='boxscore-data'>{is_float(boxscore.fg3m) ? (boxscore.fg3m.toFixed(1)) : (boxscore.fg3m)}</td>
            <td className='boxscore-data'>{is_float(boxscore.fg3a) ? (boxscore.fg3a.toFixed(1)) : (boxscore.fg3a)}</td>
            <td className='boxscore-data'>{boxscore.fg3_pct ? (boxscore.fg3_pct.toFixed(3)) : (null)}</td>
            <td className='boxscore-data'>{is_float(boxscore.pts) ? (boxscore.pts.toFixed(1)) : (boxscore.pts)}</td>
            <td className='boxscore-data'>{is_float(boxscore.oreb) ? (boxscore.oreb.toFixed(1)) : (boxscore.oreb)}</td>
            <td className='boxscore-data'>{is_float(boxscore.dreb) ? (boxscore.dreb.toFixed(1)) : (boxscore.dreb)}</td>
            <td className='boxscore-data'>{is_float(boxscore.reb) ? (boxscore.reb.toFixed(1)) : (boxscore.reb)}</td>
            <td className='boxscore-data'>{is_float(boxscore.ast) ? (boxscore.ast.toFixed(1)) : (boxscore.ast)}</td>
            <td className='boxscore-data'>{is_float(boxscore.stl) ? (boxscore.stl.toFixed(1)) : (boxscore.stl)}</td>
            <td className='boxscore-data'>{is_float(boxscore.blk) ? (boxscore.blk.toFixed(1)) : (boxscore.blk)}</td>
            <td className='boxscore-data'>{is_float(boxscore.tov) ? (boxscore.tov.toFixed(1)) : (boxscore.tov)}</td>
            <td className='boxscore-data'>{is_float(boxscore.pf) ? (boxscore.pf.toFixed(1)) : (boxscore.pf)}</td>
            <td className='boxscore-data'>{is_float(boxscore.plus_minus) ? (boxscore.plus_minus.toFixed(1)) : (boxscore.plus_minus)}</td>
            <td className='boxscore-data'>{boxscore.fantasy_pts.toFixed(1)}</td>
        </>
    )
}

export default DataTD;