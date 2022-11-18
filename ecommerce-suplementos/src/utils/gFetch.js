let obj = [
    {id: '1', name: 'Whey Protein 930g', categoria: 'Proteína',stock: '100',price: '1500',  foto:'https://farmacityar.vteximg.com.br/arquivos/ids/226270-1000-1000/143033_suplemento-dietario-whey-protein-sabor-vainilla-en-polvo-x-930-g_imagen-1.jpg?v=637957509895030000'},
    {id: '2', name: 'Ultra tech creatina', categoria: 'Creatina',stock: '100',price: '1500',  foto:'https://farmacityar.vteximg.com.br/arquivos/ids/223828-1000-1000/146353_suplemento-dietario-creatina-monohidrato-x-500-gr_imagen-1.jpg?v=637901359050170000'},
    {id: '3', name: 'Pre entreno C4', categoria: 'Pre entreno',stock: '100',price: '1500',  foto:'https://www.demusculos.com/shop/641-medium_default/cellucor-c4-x30.jpg'},
    {id: '4', name: 'Ultra tech protein', categoria: 'Proteína',stock: '100',price: '1500',  foto:'https://farmaciassanchezantoniolli.com.ar/6158-large_default/ultra-tech-whey-protein-907g-2-libras-vainilla-prote%C3%ADna-de-suero.jpg'},
    {id: '5', name: 'Growth creatine', categoria: 'Creatina',stock: '100',price: '1500',  foto:'https://titansport.com.ar/wp-content/uploads/2022/02/Creatina-Growth-1.jpg'}
]

export const gFetch = (id) => {
    // comporobaciones
    return new Promise( ( resuelto, rechazada ) => {
        // ACCIONES
        setTimeout(()=>{
            resuelto(obj)
        }, 2000)
        // rechazada('promesa rechazada')
    })
    // .catch()
}
