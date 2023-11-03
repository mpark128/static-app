import { useState } from "react";
import { player_obj } from "./types";

type WatchlistButtonProps = {
    watchlist: player_obj[],
    showWatchlist:boolean,
    handleShowWatchlist:(e:React.MouseEvent<HTMLButtonElement>) => void
}

function WatchlistButton({ watchlist, showWatchlist, handleShowWatchlist }:WatchlistButtonProps) {

    return (
        showWatchlist ? (
            <div>
                <button className="nav-button active-button" disabled={watchlist.length < 1} onClick={handleShowWatchlist}>Watchlist</button>
            </div>
        ) : (
            <div>
                <button className="nav-button" disabled={watchlist.length < 1} onClick={handleShowWatchlist}>Watchlist</button>
            </div>
        )
            
    )
}

export default WatchlistButton;