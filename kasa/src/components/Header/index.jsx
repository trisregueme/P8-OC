import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.svg"

function Header() {
  /*
  const location = useLocation()
  console.log(location)
  if (location.pathname==="/apropos") {
    navElement = "apropos"
  } else {
    navElement = "accueil"
  }
  */

  return (
    <header>
      <NavLink to="/"><img src={logo} alt="logo Kasa"></img></NavLink>
      <nav>
        <NavLink className={({isActive}) => (isActive ? "active-link" : "none")} to="/"> Accueil</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active-link" : "none")} to="/apropos">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header