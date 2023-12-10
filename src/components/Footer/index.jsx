import { Link } from 'react-router-dom'
import logofooter from "../../assets/logofooter.svg"

function Footer() {
  return (
    <footer>
      <Link to="/"><img src={logofooter} alt="logo Kasa"></img></Link>
      <p> © 2020 Kasa. All rights reserved </p>
    </footer>
  )
}

export default Footer