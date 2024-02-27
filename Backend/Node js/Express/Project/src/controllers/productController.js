// productController.js
import path from 'path';
import ProductModel from '../models/product.model.js';
import { url } from 'inspector';

export default class ProductController {
    getProducts(req, res) {
        let products=ProductModel.get()
        console.log(products);
        res.render('product', {products:products,userEmail:req.session.userEmail})
        // return res.sendFile(
        //     path.join(path.resolve(), 'src','views','product.html'));
    }

    getAddform(req, res){
        return res.render('new-product',{errorMessage:null,userEmail:req.session.userEmail})
    }



    //Add the product from the client
    AddProduct(req, res){

        // access the data from the form 
        const {name, desc, price}=req.body
        const imageUrl = 'images/' + req.file.filename;
        ProductModel.addNew(name, desc, price, imageUrl);
         var products=ProductModel.get();
         console.log(products);
        res.render('product', {products:products,userEmail: req.session.userEmail});
    }



    //update the product
    updateProduct(req, res, next){
        // 1.fetch the product of id 
        // const {id}=req.body;// id is not accessible by this 
        const id=req.params.id 
        const productsFound=ProductModel.getById(id);
        if(productsFound){
            res.render('update', {product:productsFound, errorMessage:null,userEmail:req.session.userEmail})
        }
         //if  not exist display an error message 
        else{

            res.status(402).send("product not found")
        }
       
    }
    postUpdate(req, res){
        ProductModel.updateExistProduct(req.body);
        // console.log(req.body);
         let products=ProductModel.get();
         console.log(products)
         return res.render('product', {products:products,userEmail:req.session.userEmail});
    }

    deleteProduct(req, res){
        const id=req.params.id 
        const productsFound=ProductModel.getById(id);
        if(!productsFound){
            return res.status(410).send("product not found")
        }
       ProductModel.deleteExistingProduct(id);
       var products=ProductModel.get();
        res.render('product', {products:products, userEmail:req.session.userEmail});


    }
}
