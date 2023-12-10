import { useState } from "react"
import leftarrow from "../../assets/carousel/arrow_left.png"
import rightarrow from "../../assets/carousel/arrow_right.png"

function SlideShow({pictures , title}) {
    const [imageCounter, setImageCounter] = useState(1)
    if (imageCounter > pictures.length) {
        setImageCounter(1)
    } else if (imageCounter < 1) {
        setImageCounter(pictures.length)
    }

    return (
        <div className="carrousel">
            <img className="carrousel-image" src={pictures[imageCounter - 1]} alt={`carrousel ${title}`}></img>
            {pictures.length >= 2 ?
                <img className="left-arrow" src={leftarrow} alt="left arrow" onClick={() => setImageCounter(imageCounter + -1)}></img>
                : null
            }
            {pictures.length >= 2 ?
                <img className="right-arrow" src={rightarrow} alt="right arrow" onClick={() => setImageCounter(imageCounter + 1)}></img>
                : null
            }
            {pictures.length >= 2 ?
                (<p className="image-counter">{imageCounter}/{pictures.length}</p>) : null
            }
        </div>
    )
}
export default SlideShow