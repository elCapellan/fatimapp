const products =[
    {
        id: '1',
        name: 'Resma A4',
        price: 1500,
        category: 'papeleria',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/655/318/products/10110121-4bd295f637cb6edc6e15217377951954-640-0.png',
        stock: 50,
        description: 'Resma Autor A4 de 75 g/m'
    },
    {id:'2', name: 'Papel foto', price: 2600, category: 'papeleria',img:'https://papeleracumbre.com.ar/wp-content/uploads/2021/01/600150.jpg' },
    {id:'3', name: 'Lápices de colores', price: 1300, category: 'lapices', img:'https://jumboargentina.vtexassets.com/arquivos/ids/200291/Lapices-De-Colores-Faber-Castell-X-12-Und----3-Grafitos-Gratis-Lapices-De-Colores-12-Unidades---3-Grafitos-Faber-Castell-1-36672.jpg' }
]

export const getProducts=()=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}