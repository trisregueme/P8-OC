function Card({title, cover}) {
    return (
        <div className="location-card">
            <img className="cardImage" src={cover} alt={title}></img>
            <div className="cardFilter"></div>
            <p className="cardTitle">{title}</p>
        </div>
    )
}

export default Card