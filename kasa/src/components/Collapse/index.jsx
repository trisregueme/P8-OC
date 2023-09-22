import { useState } from "react"
import chevron from "../../assets/chevron.svg"

function Collapse( {collapseTitle, collapseText} ) {
    console.log(collapseTitle)
    console.log(collapseText)

    let [collapseState, changeCollapseState] = useState("notshowing")
    console.log(collapseState)

    function changeState() {
        if (collapseState === "showing") {
            changeCollapseState("notshowing")
        } else {
            changeCollapseState("showing")
        }
        console.log(collapseState)
    }  
    return (
        <div className={`collapse-element : collapse-${collapseState}`}>
            <div className="collapse-bar">
                <p>{collapseTitle}</p>
                <img src={chevron} alt="chevron" onClick={() => changeState()}></img>
            </div>
            <p 
                className={`collapse-${collapseTitle}`}
            >
                {collapseText}
            </p>
        </div>
    )
}

export default Collapse