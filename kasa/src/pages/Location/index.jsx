import { useParams } from "react-router-dom"
import datas from "../../datas/data.json"
import Carousel from "../../components/Carousel"
import HostInfos from "../../components/Hostinfos"

function Location() {
    let { cardId } = useParams()
    console.log(cardId)
    let locationInfos = datas.find((elem) => elem.id === cardId)
    console.log(locationInfos)
    //const hostinfos = {locationInfos.host.name}
    //console.log(hostinfos)
    
    return (
        <div className="location-panel" key={(locationInfos.location)+(locationInfos.id)}>
            <Carousel
                pictures={locationInfos.pictures}
                title={locationInfos.title}
            />
            <section className="location-informations">
                <div className="location-header">
                    <div>
                        <h1>{locationInfos.title}</h1>
                        <p>{locationInfos.location}</p>
                    </div>
                    <HostInfos 
                        infos={locationInfos.host}
                    />
                </div>

                {locationInfos.description}
                {locationInfos.rating}
                {locationInfos.equipments}
                {locationInfos.tags}
            </section>
        </div>
    )
}

export default Location