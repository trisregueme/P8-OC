import reportWebVitals from "./reportWebVitals"
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./sass/style.css"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Aboutus from "./pages/Aboutus"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Location from "./pages/Location"
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Aboutus />} />
                <Route path="*" element={<Error />} />
                <Route path="/location" element={<Location />} />
                <Route path="/location/:cardId" element={<Location />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
