import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { productos } from '../../Assets/productos'
import { promesa } from '../../Assets/promesa'
import { Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    // const stock = 20;
    
    // const initial = 1;

    // const onAdd = (contador) => {
    //     console.log(`Agregaste ${contador} al carrito!`);
    // };

    let { IdCategoria } = useParams();
    
    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        promesa(productos)
            .then(res => {
                if (IdCategoria){
                    setLoading(false)    
                    setListaProductos(res.filter(producto => producto.categoria === IdCategoria))
                } else {
                    setLoading(false)
                    setListaProductos(res)
                }
            })
    }, [IdCategoria]);
    
    return(
        <>
            {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd}/> */}
            {loading ? <Spinner /> : <ItemList listaProductos={listaProductos} />}
        </>
    )
}

export default ItemListContainer;