import GamesTable from "./GamesTable";
import { game, team } from "./types"

type GamesProps = {
    seasons:string[],
    games:game[],
    teams:team[],
    handleTeam: (e: React.MouseEvent<HTMLButtonElement>) => void
};

type gamesBySeason = {
    season:string,
    games:game[]
};

function Games({seasons, games, teams, handleTeam}:GamesProps) {
    const real_games:game[] = games.filter(g => g.home_id !== 0 && g.away_id !== 0);
    let gamesBySeason:gamesBySeason[] = [];
    seasons.forEach(s => {
        const pool:game[] = real_games.filter(g => g.season === s);
        const g:gamesBySeason = {
            season: s,
            games: pool
        };
        gamesBySeason.push(g);
    });

    return (
        <div className="container">
            {gamesBySeason.map(s => (
                <div key={s.season}>
                    <h2>{s.season} Season</h2>
                    <GamesTable games={s.games} teams={teams} handleTeam={handleTeam} />
                </div>      
            ))}
        </div>
    )
}

export default Games;