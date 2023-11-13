export type boxscore = {
    games_played:number,
    minutes:number,
    fgm:number,
    fga:number,
    fg_pct:number|null,
    ftm:number,
    fta:number,
    ft_pct:number|null,
    fg3m:number,
    fg3a:number,
    fg3_pct:number|null,
    pts:number,
    oreb:number,
    dreb:number,
    reb:number,
    ast:number,
    stl:number,
    blk:number,
    tov:number,
    pf:number,
    plus_minus:number,
    fantasy_pts:number
};

export type team = {
    id:number,
    name:string|null,
    city:string|null,
    abbreviation:string,
    conference:string|null,
    division:string|null,
    slug:string,
    player_ids:number[]
};

export type gamelog = {
    game_id:number,
    team_id:number,
    games_played:number,
    minutes:number,
    fgm:number,
    fga:number,
    fg_pct:number|null,
    ftm:number,
    fta:number,
    ft_pct:number|null,
    fg3m:number,
    fg3a:number,
    fg3_pct:number|null,
    pts:number,
    oreb:number,
    dreb:number,
    reb:number,
    ast:number,
    stl:number,
    blk:number,
    tov:number,
    pf:number,
    plus_minus:number,
    fantasy_pts:number
};

export type player = {
    id:number,
    first_name:string,
    last_name:string,
    slug:string,
    team_id:number,
    jsy_number:number|null,
    position:string[],
    height_inches:number,
    weight_lbs:number,
    last_attended:string,
    country: string,
    draft_year:number|null,
    draft_round:number|null,
    draft_number:number|null,
    from_year:number,
    to_year:number,
    is_active:boolean,
    gamelogs:gamelog[],
};


export type game = {
    id:number,
    season:string,
    date:string,
    home_id:number,
    away_id:number,
    home_score:number|null,
    away_score:number|null,
    matchup:string
};

export type data_obj = {
    players: player[],
    teams: team[],
    games: game[],
    meta: {
        seasons:string[],
        last_updated:string,
        to_date:string|null
    }
}

export type stats = {
    counting_stats: {
        totals:boxscore,
        avgs:boxscore
    },
    z_score: {
        value: {
            totals:number,
            avgs: number
        },
        totals:boxscore,
        avgs:boxscore
    }
};
  
export type player_obj = {
    player:player,
    stats:stats
};

export type record = {
    wins:number,
    losses:number
}
export type team_obj = {
    team:team,
    league:record,
    conference:record,
    division:record,
    home:record,
    away:record
};

export type gb = {
    id:number,
    gb:number|null
};

export type gb_obj = {
    league:gb[],
    conference:gb[],
    division:gb[]
};