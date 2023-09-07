import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"

function Header() {
  return (
    <header>
      <Link to="/"><img src={logo} alt="logo Kasa"></img></Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header