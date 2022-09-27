import { Flex } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({listaProductos}) => {

  return (
    <Flex justify="space-around" align="center" wrap="wrap">
        {listaProductos.map(producto => <Item key={`${producto.producto}-${producto.id}`} producto={producto}/>)}
    </Flex>
  )
}

export default ItemList