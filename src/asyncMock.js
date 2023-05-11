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
        id:'2',
        name:'tablet',
        price: 7000,
        category:'tablet',
        img:' ',
        stock:25,
        description:'descripcion del producto'
    },
    {
        id:'3',
        name:'notebook',
        price: 7000,
        category:'notebook',
        img:' ',
        stock:25,
        description:'descripcion del producto'
    },
]

export const getProducts = async()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = async(productId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByIdCategory = async(productCategory)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve (products.filter(prod=>prod.category===productCategory))
        })
    }, 500)
}