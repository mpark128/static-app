import { data_obj, player_obj } from "./types";
import SeasonDropdown from "./SeasonDropdown";
import WatchlistButton from "./WatchlistButton";
import PlayersButton from "./PlayersButton";

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
    handleSearch:(e:React.KeyboardEvent<HTMLInputElement>) => void
};

function Navbar({data, updated, seasons, watchlist, handleSeasons, showPlayers, handleShowPlayers, showWatchlist, handleShowWatchlist, handleSearch}: NavbarProps) {

    return (
        <nav className="navbar">
            <input id='search' autoFocus autoComplete='off' placeholder='Search Player' type='text' onKeyUp={handleSearch}></input>
            <ul>
                <li><SeasonDropdown all_seasons={data.meta.seasons} seasons={seasons} handleSeasons={handleSeasons}/></li>
                <li><WatchlistButton watchlist={watchlist} showWatchlist={showWatchlist} handleShowWatchlist={handleShowWatchlist} /></li>
                <li><PlayersButton showPlayers={showPlayers} handleShowPlayers={handleShowPlayers} /></li>
                <li><button className="nav-button">Teams</button></li>
                <li><button className="nav-button">Games</button></li>
            </ul>
            Last Updated: {updated}
        </nav>
    );
}

export default Navbar;