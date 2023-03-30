import ProductManager from "./manager/ProductManager.js";

const manager = new ProductManager();

const env = async () =>{

    let product = {
        title: "product",
        description: "seguimiento de producto",
        price: 5000,
        thumbnail: "no disponible",
        code: "ES7",
        stock: 40
    }

    let result = await manager.addProduct(product);
    console.log(result);
    
    let products = await manager.getProducts();
    console.log(products);
}

env()