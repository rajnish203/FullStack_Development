//export deafult work on three things 
//1. Hoisted Declaration => a function 
//2. Class
//3. assignment expression 

//we need to import the body from express validator 
import { body, validationResult } from "express-validator";

const validateRequest = async (req, res, next) => {
    // validate the data from server side
     const {name, price, imageUrl}=req.body
     let error=[];
     if(!name || name.trim()==""){
         error.push('Name is required')
     }
     if(!price || parseFloat(price)<1){
         error.push('Price must be a positive value')
     }

     try{
         const ValidUrl=new url(imageUrl)
     }catch(err){
         error.push('Url is invalid')
     }

    if (error.length > 0) {
        return res.render('new-product', { errorMessage: error[0] })
    }
    next();
}
    

export default validateRequest;