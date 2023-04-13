const products =[
    {
        id:'1',
        name:'blusa',
        price: 7000,
        category:'dama',
        img:' ',
        stock:25,
        description:'descripcion del producto'
    },
    {
        id:'1',
        name:'blusa',
        price: 7000,
        category:'dama',
        img:' ',
        stock:25,
        description:'descripcion del producto'
    },
    {
        id:'1',
        name:'blusa',
        price: 7000,
        category:'dama',
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