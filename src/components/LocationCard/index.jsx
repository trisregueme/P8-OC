import datas from "../../datas/data.json"
import Card from "../Card"
import { Link } from "react-router-dom"

function LocationCard() {
    return (
        <div className="card-division">
            {datas.map((location) => (
                <div className="card-division-item" key={(location.id)+(location.title)}>
                    <Link to={`/location/${location.id}`}>                        
                        <Card
                            key={location.id}
                            title={location.title}
                            cover={location.cover}
                            id={location.id}
                        />
                    </Link>
                </div>
                )
            )}
        </div>

    )
}

export default LocationCard