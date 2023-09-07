import banner from "../../assets/banner.svg"

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="bannière Kasa"></img>
      <div className="bannerFilter"></div>
      <p>Chez vous, partout et ailleurs </p>
    </div>
  )
}

export default Banner