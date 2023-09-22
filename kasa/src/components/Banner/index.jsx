import banner from "../../assets/banner.svg"
import aboutusbanner from "../../assets/aboutusbanner.svg"
import { useLocation } from "react-router-dom"


function Banner() {
  const location = useLocation()

  return (
    <div className="banner">
      <img src={(location.pathname === "/apropos" ? aboutusbanner : banner)} alt="bannière Kasa"></img>
      <div className="banner-filter"></div>
      <p>{location.pathname === "/apropos" ? "" : "Chez vous, partout et ailleurs"}</p>
    </div>
  )
}

export default Banner