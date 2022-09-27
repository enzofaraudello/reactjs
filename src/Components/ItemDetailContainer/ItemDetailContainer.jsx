import React, { useEffect, useState } from 'react'
import { productos } from '../../Assets/productos'
import { promesa } from '../../Assets/promesa'
import { Spinner } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  
  const { IdProducto } = useParams();

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    promesa(productos)
      .then(res => setListProduct(res.find(item => item.id === parseInt(IdProducto))))
  }, [IdProducto])

  return (
    <>
      {!loading ? <Spinner /> : <ItemDetail listProduct={listProduct}/>}
    </>
  )
}

export default ItemDetailContainer