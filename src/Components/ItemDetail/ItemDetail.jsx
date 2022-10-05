import React, { useState, useContext } from 'react'
import { Box, Image, Button } from '@chakra-ui/react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount' 
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'

const ItemDetail = ({listProduct}) => {
  
    const stock = listProduct.stock;
    const initial = 1;

    const [compra, setCompra ] = useState(false);

    const onAdd = (contador) => {
      setCompra(true);
      addItem();
    };

    const { addItem } = useContext(useCartContext)

  return (
    <Box className="box">
      <Image src={listProduct.imagen} w="20rem" h="22rem"/>
      <p className='producto-titulo'>{listProduct.producto}</p>
      <p className='producto-precio'>${listProduct.precio}</p>
      <p className='texto'>{listProduct.descripcion}</p>
      {compra ? <Link to="/cart"><Button m="1rem">Finalizar compra</Button></Link> : <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>}
    </Box>
  )
}

export default ItemDetail