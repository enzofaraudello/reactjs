import React from 'react';
import { products } from '../../assets/productos'
import { customFetch } from '../../assets/customFetch'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'
import { Spinner } from '@chakra-ui/react';


const ItemListContainer= ({greeting}) => {

    const[loading, setLoading]=useState([])
    const [listProducts, setlistProducts] = useState([])
    useEffect(() =>{
        customFetch(products)
        .then(res =>{
             setLoading(false)
             setlistProducts(res)})
        
    }, [])


   // console.log(listProducts)

    return (
        <>
        <div> 
        <h>{greeting}</h>
        </div>
        {loading ?
        <Spinner />
        :
        <ItemList listProducts={listProducts} />}
        </>
    )
}

export {ItemListContainer}