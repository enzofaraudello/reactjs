import React, { useState } from 'react'
import { Button, VStack } from '@chakra-ui/react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumarProductos = () => contador < stock && setContador(contador + 1)
    
    const restarProductos = () => contador > initial && setContador(contador - 1)
  
    const agregarAlCarrito = () => {
        onAdd(contador);
        setContador(1);
    }

    return (
    <VStack>
        <div className='counter'>
            <Button className="counter-botones" disabled={contador === stock} onClick={sumarProductos}>+</Button>
            <div className="counter-cantidad">{contador}</div>
            <Button className="counter-botones" disabled={contador === initial} onClick={restarProductos}>-</Button>
        </div>
        <Button onClick={agregarAlCarrito}>Me lo llevo!</Button>
    </VStack>
  )
}

export default ItemCount