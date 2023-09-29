import { player_obj, game, gamelog, team } from "./types";

type GamelogTableProps = {
    player_obj:player_obj,
    teams:team[],
    games:game[]
};

type game_date = {
    game_id:number,
    date:string
};

type matchup = {
    game_id:number,
    matchup:string
    result:string
};

function GamelogTable({ player_obj, games, teams }: GamelogTableProps) {
    const gamelogs:gamelog[] = player_obj.player.gamelogs;

    // get dates of games in gamelog
    let game_dates:game_date[] = [];
    // get matchups with player's team as front abbreviation
    let matchups:matchup[] = [];
    gamelogs.forEach(gamelog => {
        games.forEach(game => {
            if (gamelog.game_id === game.id) {
                // dates
                const date = new Date(game.date);
                const date_string = date.toLocaleDateString();
                const g:game_date = {
                    game_id: gamelog.game_id,
                    date: date_string
                };
                game_dates.push(g);

                // matchup
                const home_team = teams.find(team => team.id === game.home_id);
                const away_team = teams.find(team => team.id === game.away_id);

                let result:string = 'N/A';
                if (game.home_id === gamelog.team_id) {
                    if (game.home_score && game.away_score) {
                        if (game.home_score > game.away_score) {
                            result = `W: ${game.home_score} (${home_team?.abbreviation}) - ${game.away_score} (${away_team?.abbreviation})`;
                        } else {
                            result = `L: ${game.home_score} (${home_team?.abbreviation}) - ${game.away_score} (${away_team?.abbreviation})`;
                        }
                    }
                    const matchup:matchup = {
                        game_id: game.id,
                        matchup: `${home_team?.abbreviation} vs ${away_team?.abbreviation}`,
                        result: result
                    };
                    matchups.push(matchup);
                } else if (game.away_id === gamelog.team_id) {
                    if (game.home_score && game.away_score) {
                        if (game.away_score > game.home_score) {
                            result = `W: ${game.away_score} (${away_team?.abbreviation}) - ${game.home_score} (${home_team?.abbreviation})`;
                        } else {
                            result = `L: ${game.away_score} (${away_team?.abbreviation}) - ${game.home_score} (${home_team?.abbreviation})`;
                        }
                    }
                    const matchup:matchup = {
                        game_id: game.id,
                        matchup: `${away_team?.abbreviation} @ ${home_team?.abbreviation}`,
                        result: result
                    };
                    matchups.push(matchup);
                }
            }
        });
    });

    return (
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
                {gamelogs.map(gamelog => (
                    <tr key={gamelog.game_id}>
                        <td>{game_dates.find(date => date.game_id === gamelog.game_id)?.date}</td>
                        <td>{matchups.find(matchup => matchup.game_id === gamelog.game_id)?.matchup}</td>
                        <td>{matchups.find(matchup => matchup.game_id === gamelog.game_id)?.result}</td>
                        <td>{gamelog.games_played}</td>
                        <td>{gamelog.minutes}</td>
                        <td>{gamelog.fgm}</td>
                        <td>{gamelog.fga}</td>
                        <td>{gamelog.fg_pct?.toFixed(3)}</td>
                        <td>{gamelog.ftm}</td>
                        <td>{gamelog.fta}</td>
                        <td>{gamelog.ft_pct?.toFixed(3)}</td>
                        <td>{gamelog.fg3m}</td>
                        <td>{gamelog.fg3a}</td>
                        <td>{gamelog.fg3_pct?.toFixed(3)}</td>
                        <td>{gamelog.pts}</td>
                        <td>{gamelog.oreb}</td>
                        <td>{gamelog.dreb}</td>
                        <td>{gamelog.reb}</td>
                        <td>{gamelog.ast}</td>
                        <td>{gamelog.stl}</td>
                        <td>{gamelog.blk}</td>
                        <td>{gamelog.tov}</td>
                        <td>{gamelog.pf}</td>
                        <td>{gamelog.plus_minus}</td>
                        <td>{gamelog.fantasy_pts}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
} 

export default GamelogTable;