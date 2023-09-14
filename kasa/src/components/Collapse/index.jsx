import chevron from "../../assets/chevron.svg"

function Collapse( {collapseTitle, collapseText} ) {
    console.log(collapseTitle)
    console.log(collapseText)
    return (
        <div className="collapse-element">
            <div className="collapse-bar">
                <p>{collapseTitle}</p>
                <img src={chevron} alt="chevron"></img>
            </div>
            <p className={`collapse-${collapseTitle}`}>{collapseText}</p>
        </div>
    )
}

export default Collapse