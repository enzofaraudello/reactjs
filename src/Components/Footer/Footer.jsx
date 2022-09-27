import React from 'react'
import '../Footer/Footer.css'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-anchors">
                <Link to="/" className=''>Inicio</Link>
                <Link to="/categoria/vehiculo" className='link-vehiculo'>Vehiculo</Link>
                <Link to="/categoria/bienes" className='link-bienes'>Bienes</Link>
                <Link to="/categoria/servicios" className='link-servicios'>Servicios</Link>
                <Link to="/categoria/inmuebles" className='link-inmuebles'>Inmuebles</Link>
            </div>
            <div className="footer-redes">
                <a href="https://www.instagram.com/accounts/login/" rel="noreferrer" target="_blank" className="redes-instagram"><BsInstagram /></a>
                <a href="https://web.whatsapp.com/" rel="noreferrer" target="_blank" className="redes-wp"><BsWhatsapp /></a>
            </div>
        </div>    
    </footer>
  )
}

export default Footer