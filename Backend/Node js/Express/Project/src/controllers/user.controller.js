import userModel from "../models/user.model.js"
import ProductModel from "../models/product.model.js";

export default class userController{
    getRegister(req, res){

    return res.render('register')
    }

    postRegister(req, res){
        const{name, email, password}=req.body
        userModel.add(name, email, password);
        let re=userModel.get();
        console.log(re);
       res.render('login',{errorMessage:null, userEmail:req.session.userEmail})
    }

    // get login form 
    getLogin(req, res){
        res.render('login',{errorMessage:null,userEmail:req.session.userEmail})
    }


    //post login request
    postLogin(req, res){
        const{email, password}=req.body;
        const founduser=userModel.isValidUser(email, password)
        if(!founduser){
            return res.render('login', {errorMessage:'invalid credentials!!'})
        }
        req.session.userEmail = email;
        var products=ProductModel.get();
       res.render('product', {products, userEmail:req.session.userEmail});

    }


    logout(req, res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/login');
            }
        })
        res.clearCookie('lastVisit');
    }


}