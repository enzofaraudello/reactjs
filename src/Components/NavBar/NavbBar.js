import React from 'react';
import logo from '../../assets/logo.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./Header.css"

const NavBar = () => {
    return (
        <header>
        <img src={logo} alt=""/>
        <h1>PayPits</h1>
        <nav>
            <a href="">Productos</a>
            <a href="">Servicio</a>
            <a href="">Inmuebles</a>
            <a href="">Vehículo</a>
        </nav>
        <AddShoppingCartIcon color="action"/>
        </header>
    )
}

export default NavBar