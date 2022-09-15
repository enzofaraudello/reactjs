import React from 'react';
import { products } from '../../assets/productos'
import { customFetch } from '../../assets/customFetch'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'


const ItemListContainer= ({greeting}) => {

    const [listProducts, setlistProducts] = useState([])
    useEffect(() =>{
        customFetch(products)
        .then(res => setlistProducts(res))
    }, [])


   // console.log(listProducts)

    return (
        <>
        <div> 
        <h>{greeting}</h>
        </div>
        <ItemList listProducts={listProducts} />
        </>
    )
}

export {ItemListContainer}