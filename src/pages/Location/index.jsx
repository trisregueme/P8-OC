import { useParams , Navigate } from "react-router-dom"
import datas from "../../datas/data.json"
import SlideShow from "../../components/SlideShow"
import HostInfos from "../../components/Hostinfos"
import DisplayTags from "../../components/Tags"
import Rating from "../../components/Rating"
import Collapse from "../../components/Collapse"

function Location() {
    let { cardId } = useParams()
    let locationInfos = datas.find((elem) => elem.id === cardId)
    const cardIdExists = datas.some((elem => elem.id === cardId))
 
    return (
        cardIdExists ? 
        <div className="location-panel" key={(locationInfos.location)+(locationInfos.id)}>
            <SlideShow
                pictures={locationInfos.pictures}
                title={locationInfos.title}
            />
            <section>
                <div className="location-informations">
                  <div className="location-header">
                      <h1>{locationInfos.title}</h1>
                      <p>{locationInfos.location}</p>
                  </div>
                  <HostInfos 
                      infos={locationInfos.host}
                  />
                  <DisplayTags
                      className="location-tags"
                      tags={locationInfos.tags}
                  />
                  <Rating
                      className="location-ratings"
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
                      collapseText={locationInfos.equipments.map((item, index) =>
                          <li 
                              key={index}
                          >
                              {item}
                          </li>
                      )}
                  />
                </div>
            </section>
        </div>
        : <Navigate to="*" />
    )
 }


export default Location