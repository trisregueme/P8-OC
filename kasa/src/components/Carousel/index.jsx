import leftarrow from "../../assets/carousel/arrow_left.png"
import rightarrow from "../../assets/carousel/arrow_right.png"

function Carousel(pictures) {
    let picturesArray = pictures.pictures
    let titleArray = pictures.title
    console.log(titleArray)
    
    return (
        <div>
            <img src={leftarrow} alt="left arrow"></img>
            <img src={rightarrow} alt="right arrow"></img>
            <img src={picturesArray[0]} alt={titleArray}></img>
            {picturesArray.length >= 2 ? 
                (<p>1/{picturesArray.length}</p>) : null
            }
        </div>
    )
}
export default Carousel