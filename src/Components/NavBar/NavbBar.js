import React from 'react';
import logo from '../../assets/logo.jpg'
import "./Header.css"
import { CartWidget } from "./CartWidget"

const NavBar = ({children}) => {
    const categorias = [
    {id:0,nombre: 'Productos'},
    {id:1,nombre: 'Servicios'},
    {id:2,nombre: 'Inmuebles'},
    {id:3,nombre: 'Vehiculos'}
 ]

    return (
        <>
        <img src={logo} alt=""/>
        <header>
        
        <h1>PayPits</h1>
        <nav>
        {categorias.map((categoria)=> {
            return <a key={categoria.id} href="">{categoria.nombre}</a>
          })}
        </nav>
        <CartWidget />
        </header>
        </>
    )
}

export default NavBar