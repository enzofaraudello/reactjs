import { CircularProgress } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { products } from '../assets/productos'

const ItemDetailContainer = ({ greeting }) =>{
    const [products, setProducts]= useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError]= useState(false)
    useEffect(()=> {
        fetch({products})
        .then((response) => response.json())
        .then((data)=> {
            const lista = data.map((product)=>{
                return{...product}
            })
            setProducts(lista)
        })
        .catch(()=>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })

    }, {})

    return(
        <>
        <h1>{greeting}</h1>
        {
            loading
            ?<CircularProgress/>
            :<h1>{products.products}</h1>
        }
        </>
    )
}
export default ItemDetailContainer


