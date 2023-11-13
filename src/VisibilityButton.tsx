type VisibilityButtonProps = {
    label:string,
    showState:boolean,
    handleVisibility:(e:React.MouseEvent<HTMLButtonElement>) => void
}

function VisibilityButton({ label, showState, handleVisibility }:VisibilityButtonProps) {

    return (
        showState ? (
            <div>
                <button className="nav-button active-button" onClick={handleVisibility}>{label}</button>
            </div>
        ) : (
            <div>
                <button className="nav-button" onClick={handleVisibility}>{label}</button>
            </div>
        )
            
    )
}

export default VisibilityButton;