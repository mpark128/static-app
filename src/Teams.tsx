import {team, player_obj, game, record, team_obj} from './types';
import { useState } from 'react';
import TeamsTable from './TeamsTable';

type TeamsProps = {
    teams:team[],
    players:player_obj[],
    games:game[],
    handleTeam: (e: React.MouseEvent<HTMLButtonElement>) => void
};

function Teams({teams, players, games, handleTeam}:TeamsProps) {
    let team_objs:team_obj[] = [];
    teams.forEach(t => {
        let wins:number = 0;
        let losses:number = 0;

        let conf_wins:number = 0;
        let conf_losses:number = 0;

        let div_wins:number = 0;
        let div_losses:number = 0;

        let home_wins:number = 0;
        let home_losses:number = 0;

        let away_wins:number = 0;
        let away_losses:number = 0;
        if (t.id !== 0) {
            games.forEach(g => {
                if (g.home_score !== null && g.away_score !== null) {
                    if (t.id === g.home_id) {
                        const opp:team = teams.find(t => t.id === g.away_id) as team;
                        if (g.home_score > g.away_score) {
                            wins += 1;
                            home_wins += 1;
                            if (t.conference === opp.conference) {
                                conf_wins += 1;
                            } 
                            if (t.division === opp.division) {
                                div_wins += 1;
                            }
                        } else if (g.home_score < g.away_score) {
                            losses += 1;
                            home_losses += 1;
                            if (t.conference === opp.conference) {
                                conf_losses += 1;
                            } 
                            if (t.division === opp.division) {
                                div_losses += 1;
                            }
                        }
                    } else if (t.id === g.away_id) {
                        const opp:team = teams.find(t => t.id === g.home_id) as team;
                        if (g.away_score > g.home_score) {
                            wins += 1;
                            away_wins += 1;
                            if (t.conference === opp.conference) {
                                conf_wins += 1;
                            } 
                            if (t.division === opp.division) {
                                div_wins += 1;
                            }
                        } else if (g.away_score < g.home_score) {
                            losses += 1;
                            away_losses += 1;
                            if (t.conference === opp.conference) {
                                conf_losses += 1;
                            } 
                            if (t.division === opp.division) {
                                div_losses += 1;
                            }
                        }
                    }
                } 
            });
            const league:record = {
                wins: wins,
                losses: losses
            };
            const conference:record = {
                wins: conf_wins,
                losses: conf_losses
            };
            const division:record = {
                wins: div_wins,
                losses: div_losses
            };
            const home:record = {
                wins: home_wins,
                losses: home_losses
            };
            const away:record = {
                wins: away_wins,
                losses: away_losses
            };
    
            const team_obj:team_obj = {
                team: t,
                league: league,
                conference: conference,
                division: division,
                home: home,
                away: away
            };
            team_objs.push(team_obj);
        }
    });
    team_objs.sort((a, b) => b.league.wins - a.league.wins);

    const [byLeague, setByLeague] = useState<boolean>(true);
    const [byConference, setByConference] = useState<boolean>(false);
    const [byDivision, setByDivision] = useState<boolean>(false);

    const handleGroup = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const group:string = e.target.value;
        if (group === 'league') {
            setByLeague(true);
            setByConference(false);
            setByDivision(false);
        } else if (group === 'conference') {
            setByLeague(false);
            setByConference(true);
            setByDivision(false);
        } else if (group === 'division') {
            setByLeague(false);
            setByConference(false);
            setByDivision(true);
        }
    }
 
    return (
        <div className='container'>
            <div>
                Group By: 
                <select id='teams-grouping' onChange={handleGroup}>
                    <option value={'league'}>League</option>
                    <option value={'conference'}>Conference</option>
                    <option value={'division'}>Division</option>
                </select>
            </div>
            {byLeague && 
                <div>
                    <TeamsTable teams={team_objs} handleTeam={handleTeam} games_behind='league'/>
                </div>
            }
            {byConference &&
                <div className="flex-container">
                    <div className='flex'>
                        <h2>Western Conference</h2>
                        <TeamsTable teams={team_objs.filter(t => t.team.conference === 'Western')} handleTeam={handleTeam} games_behind='conference'/>
                    </div>
                    <div className='flex'>
                        <h2>Eastern Conference</h2>
                        <TeamsTable teams={team_objs.filter(t => t.team.conference === 'Eastern')} handleTeam={handleTeam} games_behind='conference'/>
                    </div>
                </div>
            }
            {byDivision &&
                <div className='flex-container'>
                    <div className='flex'>
                        <h2>Western Conference</h2>
                        <div className='teams-division'>
                            <h2>Northwest Division</h2>
                            <TeamsTable teams={team_objs.filter(t => t.team.division === 'Northwest')} handleTeam={handleTeam} games_behind='division'/>
                        </div>
                        <div className='teams-division'>
                            <h2>Pacific Division</h2>
                            <TeamsTable teams={team_objs.filter(t => t.team.division === 'Pacific')} handleTeam={handleTeam} games_behind='division'/>
                        </div>
                        <div className='teams-division'>
                            <h2>Southwest Division</h2>
                            <TeamsTable teams={team_objs.filter(t => t.team.division === 'Southwest')} handleTeam={handleTeam} games_behind='division'/>
                        </div>
                    </div>
                    <div className='flex'>
                        <h2>Eastern Conference</h2>
                        <div className='teams-division'>
                            <h2>Atlantic Division</h2>
                            <TeamsTable teams={team_objs.filter(t => t.team.division === 'Atlantic')} handleTeam={handleTeam} games_behind='division'/>
                        </div>
                        <div className='teams-division'>
                            <h2>Central Division</h2>
                            <TeamsTable teams={team_objs.filter(t => t.team.division === 'Central')} handleTeam={handleTeam} games_behind='division'/>
                        </div>
                        <div className='teams-division'>
                            <h2>Southeast Division</h2>
                            <TeamsTable teams={team_objs.filter(t => t.team.division === 'Southeast')} handleTeam={handleTeam} games_behind='division'/>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Teams;