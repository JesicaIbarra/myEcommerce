import '../ItemListConteiner/itemListConteiner.css'
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListConteiner = ({greeting})=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
        .than(response =>{
            setProducts(response)
        })
        .catch(error=>{
            console.error(error)
        })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListConteiner;