import { game, team } from "./types";

type GamesTableProps = {
    games:game[],
    teams:team[],
    handleTeam: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const read_date = (utc_date:string) => {
    const date = new Date(utc_date);
    return date.toLocaleDateString();
}

function GamesTable({games, teams, handleTeam}:GamesTableProps) {
    
    return (
        <table>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Matchup</td>
                    <td>Home Team</td>
                    <td>Score</td>
                    <td>Away Team</td>
                    <td>Score</td>
                </tr>
            </thead>
            <tbody>
                {games.map(g => (
                    <tr key={g.id}>
                        <td>{read_date(g.date)}</td>
                        <td>{g.matchup}</td>
                        <td><button className="non-button" value={teams.find(t => t.id === g.home_id)?.id} onClick={handleTeam}>{`${teams.find(t => t.id === g.home_id)?.city} ${teams.find(t => t.id === g.home_id)?.name}`}</button></td>
                        {g.home_score !== null && g.home_score > 0 ? (
                            <td>{g.home_score}</td>
                        ) : (
                            <td>-</td>
                        )}
                        <td><button className="non-button" value={teams.find(t => t.id === g.away_id)?.id} onClick={handleTeam}>{`${teams.find(t => t.id === g.away_id)?.city} ${teams.find(t => t.id === g.away_id)?.name}`}</button></td>
                        {g.away_score !== null && g.away_score > 0 ? (
                            <td>{g.away_score}</td>
                        ) : (
                            <td>-</td>
                        )}
                        
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default GamesTable;