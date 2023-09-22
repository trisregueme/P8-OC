import { useState } from "react"
import { useLocation } from "react-router-dom"
import chevron from "../../assets/chevron.svg"

function Collapse( {collapseTitle, collapseText} ) {
// Permet la différentiation de style entre les collaspes des cards-location et de la page à propos
    const location = useLocation()
    let collapsePage = ""
    if (location.pathname==="/apropos") {
        collapsePage = "apropos"
    } else {
        collapsePage = "location"
    }
// Fonction permettant l'ouverture et la fermeture au clic des collapses
    let [collapseState, changeCollapseState] = useState("notshowing")
    function changeState() {
        if (collapseState === "showing") {
            changeCollapseState("notshowing")
        } else {
            changeCollapseState("showing")
        }
    }  
    
    return (
        <div className={
            `collapse collapse-${collapsePage} collapse-${collapseState}`
            }
        >
            <div className={`collapse-title collapse-title-${collapsePage}`}>
                <p>{collapseTitle}</p>
                <img src={chevron} alt="chevron" onClick={() => changeState()}></img>
            </div>
            <p className={`collapse-text collapse-text-${collapsePage}`}>
                {collapseText}
            </p>
        </div>
    )
}

export default Collapse