import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import './ItemDetail.css'

const ItemDetail = ({listProduct}) => {
  
  return (
    <Box className="box">
      <Image src={listProduct.imagen} w="20rem" h="22rem"/>
      <p className='producto-titulo'>{listProduct.producto}</p>
      <p className='producto-precio'>${listProduct.precio}</p>
      <p className='texto'>{listProduct.descripcion}</p>
    </Box>
  )
}

export default ItemDetail