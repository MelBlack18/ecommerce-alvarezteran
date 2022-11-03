export const products = [
    {
        id: 1,
        title: 'Red Velvet - 12 Porciones',
        price: 3500,
        stock: 10,
        category: 'dulce',
        img: 'https://tiendademel.vteximg.com.br/arquivos/ids/155404-1000-1000/RedVelvet.jpg',
        descripcion:"Torta de suave bizcocho de chocolate con característico color rojizo, rellena de dos cortes de cream cheese"
    },
    {
        id: 2,
        title: 'Brownie - 8 Porciones',
        price: 2000,
        stock: 5,
        category: 'dulce',
        img: 'https://tiendademel.vteximg.com.br/arquivos/ids/155401-1000-1000/Brownie.jpg',
        descripcion:"Clásico brownie de chocolate intenso con nueces picadas"
    },
    {
        id: 3,
        title: 'Carrot Cake - 12 Porciones',
        price: 3000,
        stock: 7,
        category: 'dulce',
        img: 'https://tiendademel.vteximg.com.br/arquivos/ids/155402-1000-1000/CarrotCake.jpg',
        descripcion:"Versión moderna de la torta de zanahoria clásica, con dos cortes de cream cheese y decorada con zanahorias glaseadas"
    },
    {
        id: 4,
        title: 'Chipa 250g',
        price: 800,
        stock: 20,
        category: 'salado',
        img: 'https://tiendademel.vteximg.com.br/arquivos/ids/155446-1000-1000/Chipa.jpg',
        descripcion:"Delicioso chipá recién horneado"
    },
    {
        id: 5,
        title: 'Scon de Queso',
        price: 400,
        stock: 10,
        category: 'salado',
        img: 'https://tiendademel.vteximg.com.br/arquivos/ids/155444-1000-1000/Chipas.jpg',
        descripcion:"Una delicia para la hora del té, llenos de sabor"
    },
    {
        id: 6,
        title: 'Roll de Jamón y Queso',
        price: 1000,
        stock: 7,
        category: 'salado',
        img: 'https://tiendademel.vteximg.com.br/arquivos/ids/155447-1000-1000/RollQueso.jpg',
        descripcion:"Excelentes para un té-cena para toda la familia"
    },
    {
        id: 7,
        title: 'Box March Hare',
        price: 4000,
        stock: 15,
        category: 'boxes',
        img: 'https://tiendademel.vteximg.com.br/arquivos/ids/155398-1000-1000/Box02.jpg',
        descripcion:"Box de desayuno o merienda que contiene cookies, scons caseros, una mermelada casera e infusión a elección"
    },
    {
        id: 8,
        title: 'Box Alice',
        price: 4500,
        stock: 5,
        category: 'boxes',
        img: 'https://tiendademel.vteximg.com.br/arquivos/ids/155399-1000-1000/Box03.jpg',
        descripcion:"Box ideal para merienda que contiene un jugo de naranja, una bebida caliente a elección, dos cuadrados dulces a elección y frutas frescas"
    },
    {
        id: 9,
        title: 'Box Mad Hatter',
        price: 4000,
        stock: 7,
        category: 'boxes',
        img: 'https://tiendademel.vteximg.com.br/arquivos/ids/155397-1000-1000/Box01.jpg',
        descripcion:"Box de desayuno o merienda que contiene una mermelada, dos croissant y una bolsita de té en hebras"
    }
];

export const getProducts = (categoryName) => {
    return new Promise((res, rej) => {

        const prodFiltrados = products.filter(
            (prod) => prod.category === categoryName
        );

        const ref = categoryName ? prodFiltrados : products;

        setTimeout(() => {
            res(ref);
        }, 500);
    });
};

export const getProduct = (prodId) => {

    return new Promise((res, rej) => {

        const obtenerProducto = products.filter((prod) => prod.id == prodId);
        const [miProducto] = obtenerProducto

        setTimeout(() => {
            res(miProducto);
        }, 500);
    }); 

};