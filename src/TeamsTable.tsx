import { team_obj, gb_obj } from "./types";
import { get_gb } from './functions';

type TeamsTableProps = {
    teams:team_obj[],
    handleTeam: (e: React.MouseEvent<HTMLButtonElement>) => void,
    games_behind:string
};

function TeamsTable({teams, handleTeam, games_behind}:TeamsTableProps) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Team</td>
                        <td>Wins</td>
                        <td>Losses</td>
                        <td>Win%</td>
                        <td>GB</td>
                        <td>Conference</td>
                        <td>Division</td>
                        <td>Home</td>
                        <td>Away</td>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(t => (
                        <tr id={t.team.slug} key={t.team.id}>
                            <td><button className="non-button" value={t.team.id} onClick={handleTeam}>{`${t.team.city} ${t.team.name}`}</button></td>
                            <td>{t.league.wins}</td>
                            <td>{t.league.losses}</td>
                            <td>{(t.league.wins / (t.league.wins + t.league.losses)).toFixed(3)}</td>
                            {games_behind === 'league' ? (
                                <td>{get_gb(teams).league.find(g => g.id === t.team.id)?.gb}</td>
                            ) : (
                                games_behind === 'conference' ? (
                                    <td>{get_gb(teams).conference.find(g => g.id === t.team.id)?.gb}</td>
                                ) : (
                                    games_behind === 'division' && 
                                        <td>{get_gb(teams).division.find(g => g.id === t.team.id)?.gb}</td>
                                )
                            )}
                            <td>{`${t.conference.wins} - ${t.conference.losses}`}</td>
                            <td>{`${t.division.wins} - ${t.division.losses}`}</td>
                            <td>{`${t.home.wins} - ${t.home.losses}`}</td>
                            <td>{`${t.away.wins} - ${t.away.losses}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            
    )
}

export default TeamsTable;