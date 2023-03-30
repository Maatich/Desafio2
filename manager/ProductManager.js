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

    updateProduct(id, updatedProduct) {
        try {
            const data = fs.readFileSync(this.path, 'utf-8');
            this.products = JSON.parse(data);
            const index = this.products.findIndex(p => p.id === id);
            if (index === -1) {
                console.log(`Error al actualizar, id: ${id} no encontrado`);
                return;
            }
            updatedProduct.id = id;
            this.products[index] = updatedProduct;
            fs.writeFileSync(this.path, JSON.stringify(this.products));
        } catch (err) {
            console.log("Error al leer o escribir el archivo.");
        }
    }

    deleteProduct(id) {
        try {
            const data = fs.readFileSync(this.path, 'utf-8');
            this.products = JSON.parse(data);
            const index = this.products.findIndex(p => p.id === id);
            if (index === -1) {
                console.log(`Error id: ${id} no encontrado`);
                return;
            }
            this.products.splice(index, 1);
            fs.writeFileSync(this.path, JSON.stringify(this.products));
            console.log(`Producto id: ${id} borrado`);
        } catch (err) {
            console.log("Error al leer o escribir el archivo.");
        }
    }

}