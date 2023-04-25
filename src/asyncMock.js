const products =[
    {
        id:'1',
        name:'celular',
        price: 7000,
        category:'celular',
        img:' ',
        stock:25,
        description:'descripcion del producto'
    },
    {
        id:'1',
        name:'tablet',
        price: 7000,
        category:'tablet',
        img:' ',
        stock:25,
        description:'descripcion del producto'
    },
    {
        id:'1',
        name:'netbook',
        price: 7000,
        category:'netbook',
        img:' ',
        stock:25,
        description:'descripcion del producto'
    },
]

export const getProducts = ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}