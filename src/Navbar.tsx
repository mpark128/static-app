import { data_obj, player_obj } from "./types";
import SeasonDropdown from "./SeasonDropdown";
import WatchlistButton from "./WatchlistButton";
import VisibilityButton from "./VisibilityButton";

type NavbarProps = {
    data:data_obj,
    updated:string,
    seasons:string[],
    watchlist:player_obj[],
    handleSeasons:(e:React.ChangeEvent<HTMLInputElement>) => void,
    showPlayers:boolean,
    handleShowPlayers:(e:React.MouseEvent<HTMLButtonElement>) => void,
    showWatchlist:boolean,
    handleShowWatchlist:(e:React.MouseEvent<HTMLButtonElement>) => void,
    handleSearch:(e:React.KeyboardEvent<HTMLInputElement>) => void,
    showTeams:boolean,
    handleShowTeams:(e:React.MouseEvent<HTMLButtonElement>) => void
    showGames:boolean,
    handleShowGames:(e:React.MouseEvent<HTMLButtonElement>) => void
};

function Navbar({data, updated, seasons, watchlist, handleSeasons, showPlayers, handleShowPlayers, showWatchlist, handleShowWatchlist, handleSearch, showTeams, handleShowTeams, showGames, handleShowGames}: NavbarProps) {

    return (
        <nav className="navbar">
            <input id='search' autoFocus autoComplete='off' placeholder='Search Player' type='text' onKeyUp={handleSearch}></input>
            <SeasonDropdown all_seasons={data.meta.seasons} seasons={seasons} handleSeasons={handleSeasons}/>
            <WatchlistButton watchlist={watchlist} showWatchlist={showWatchlist} handleShowWatchlist={handleShowWatchlist} />
            <VisibilityButton label='Players' showState={showPlayers} handleVisibility={handleShowPlayers} />
            <VisibilityButton label='Teams' showState={showTeams} handleVisibility={handleShowTeams} />
            <VisibilityButton label='Games' showState={showGames} handleVisibility={handleShowGames} />
            Last Updated: {updated}
        </nav>
    );
}

export default Navbar;