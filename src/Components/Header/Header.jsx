import React from 'react';
import Navbar from '../Navbar/Navbar'
import CartWidget from '../CartWidget/CartWidget'
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    
    return (
        <>
        <header>
            <div className="header-envios">Un tipo de tienda donde se venden artículos exentos de tasas locales o nacionales. Siempre de tu lado</div>
            <div className="header-navbar">
                <Navbar />
                <Link to="/" className="titulo">Bienvenidos a Paypits.</Link>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </header>
        </>
    )
}

export default Header;