import fs from 'fs';

const path = './files/bd.json'

export default class ProductManager{

    addProduct = async (product) =>{
        const products = await this.getProducts();
        if(products.length === 0){
            product.id = 1
        }else{
            product.id = products[products.length-1].id+1;
        }
        products.push(product);
        await fs.promises.writeFile(path, JSON.stringify(products,null,'\t'))
        return product
    }

    getProducts = async () =>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8')
            const products = JSON.parse(data);
            return products;
        }else{
            return [];
        }
    }

    getProductsById(id_product){
        let product = this.TraerProducto(id_product);
        if(product == null){
            return 'Not Found'
        }
        let registro = product.cantidad.find(idCantidad => idCantidad === id_product)
        if(registro == null){
            return true
        }else {
            return false
        }
    }

    updateProduct(product){
        const productUpdate = [];

        for(let i = 0; i< product.length; i++){
            let nuevoProduct = callBack(product[i])
            productUpdate.push(nuevoProduct)
        }
        return nuevoProduct;
    }

    deleteProduct

}