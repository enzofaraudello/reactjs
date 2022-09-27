import React from 'react'
import { Image, Button, Box, Spacer } from '@chakra-ui/react'
import '../Item/Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
      <Box p="1rem" m="1.5rem" border="0.1rem solid #9d8189" display="flex" flexDir="column" alignItems="center">
        <Link to={`/producto/${producto.id}`}>
          <Image src={producto.imagen} w="20rem" h="22rem"/>
        </Link>
        <Link to={`/producto/${producto.id}`}>  
          <div className="producto-titulo">{producto.producto}</div>
        </Link>
        <div className="producto-precio">${producto.precio}</div>
        <Link to={`/producto/${producto.id}`}>
          <Button className="producto-boton">Ver más</Button>
        </Link>
        <Spacer />
      </Box>
  )
}

export default Item