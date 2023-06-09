import { useState, useEffect } from 'react';
import '../ItemListConteiner/itemListConteiner.css'
import { getProductByIdCategory, getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListConteiner = ({greeting})=>{
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductByIdCategory: getProducts

        asyncFunc(categoryId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error=>{
            console.error(error)
        })
    }, [categoryId])

    return (
        <div className='itemListConteiner'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListConteiner;