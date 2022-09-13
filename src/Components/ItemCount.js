import React, {useState} from 'react'

const ItemCount = () => {

    
    const [contador, setContador]= useState(0);

    const ADD_TO_CART=() => {
        setContador(contador + 1);
    } 
    const REMOVE_ONE=() => {
        setContador(contador - 1);
    } 
    const REMOVE_ALL=() => {
        setContador(0);
    } 
    return (
    <>
    <div>Carrito de Compras</div>
    <h1>Productos</h1>
    <h1>{contador}</h1>
    <button onClick={ADD_TO_CART}>Agregar al carrito</button>
    <button onClick={REMOVE_ONE}>Quitar una unidad</button>
    <button onClick={REMOVE_ALL}>Borrar carrito</button>

    </>
    )

}
export default ItemCount