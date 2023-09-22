import emptystar from "../../assets/emptystar.svg"
import fullstar from "../../assets/fullstar.svg"

function Rating( {rating} ) {
    const rate = Number(rating)
    const stars =[]
    {for(let i = 1; i < 6; i++) {
        if (i > rate) {
            stars.push(<img key={emptystar.toString() + (rate - [i])} src={emptystar} alt="empty star"></img>)
        } else {
            stars.push(<img key={fullstar.toString() + (rate - [i])} src={fullstar} alt="full star"></img>)
        }
    }}
    
    return (
        <div className="ratings">
            {stars}
        </div>
    )
}

export default Rating
