import { useState } from "react";
import { player_obj } from "./types";

type PlayersButtonButtonProps = {
    showPlayers:boolean,
    handleShowPlayers:(e:React.MouseEvent<HTMLButtonElement>) => void
}

function PlayersButton({ showPlayers, handleShowPlayers }:PlayersButtonButtonProps) {

    return (
        showPlayers ? (
            <div>
                <button className="nav-button active-button" onClick={handleShowPlayers}>Players</button>
            </div>
        ) : (
            <div>
                <button className="nav-button" onClick={handleShowPlayers}>Players</button>
            </div>
        )
            
    )
}

export default PlayersButton;