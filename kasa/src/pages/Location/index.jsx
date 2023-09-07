import { useParams } from "react-router-dom"
import datas from "../../datas/data.json"
import Carousel from "../../components/Carousel"

function Location() {
    let { cardId } = useParams()
    console.log(cardId)
    let locationInfos = datas.find((elem) => elem.id === cardId)
    console.log(locationInfos)
    
    return (
        <div key={(locationInfos.location)+(locationInfos.id)}>
            {locationInfos.title}
            {locationInfos.location}
            {locationInfos.host.name}

            {locationInfos.description}
            {locationInfos.rating}
            {locationInfos.equipments}
            {locationInfos.tags}

            <Carousel
                pictures={locationInfos.pictures}
                title={locationInfos.title}
            />
        </div>
    )
}

export default Location