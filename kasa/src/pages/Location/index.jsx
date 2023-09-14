import { useParams } from "react-router-dom"
import datas from "../../datas/data.json"
import SlideShow from "../../components/SlideShow"
import HostInfos from "../../components/Hostinfos"
import DisplayTags from "../../components/Tags"
import Rating from "../../components/Rating"
import Collapse from "../../components/Collapse"

function Location() {
    let { cardId } = useParams()
    console.log(cardId)
    let locationInfos = datas.find((elem) => elem.id === cardId)
    console.log(locationInfos)

    const equipements = locationInfos.equipments.map((item, index) =>
        <li 
            key={index}
        >
            {item}
        </li>
    )
    
    return (
        <div className="location-panel" key={(locationInfos.location)+(locationInfos.id)}>
            <SlideShow
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
                <div className="location-caracteristics">
                    <DisplayTags
                        tags={locationInfos.tags}
                    />
                    <Rating
                        rating={locationInfos.rating}
                    />
                </div>
                <div className="location-details">
                    <Collapse
                        collapseTitle="Description"
                        collapseText={locationInfos.description}
                    />
                    <Collapse
                        collapseTitle="Equipements"
                        collapseText={equipements}
                    />
                </div>
            </section>
        </div>
    )
}

export default Location