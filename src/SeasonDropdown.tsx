import { useState } from "react";

type SeasonDropdownProps = {
    all_seasons: string[],
    seasons: string[],
    handleSeasons: (e:React.ChangeEvent<HTMLInputElement>) => void
}

function SeasonDropdown({ all_seasons, seasons, handleSeasons }:SeasonDropdownProps) {
    const [is_open, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!is_open);
    }

    return (
        <div>
            {is_open ? (
                <>
                    <button className="nav-button active-button" onClick={toggleMenu}>Seasons</button>
                    <div>
                        {all_seasons.map((season, index) => (
                            <label key={index}>
                                <input type="checkbox" value={season} checked={seasons.includes(season)} onChange={handleSeasons}></input>
                                {season}
                            </label>
                        ))}
                    </div>
                </>
            ) : (
                <button className="nav-button" onClick={toggleMenu}>Seasons</button>
            )}
        </div>
    )
}

export default SeasonDropdown;