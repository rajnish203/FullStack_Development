import prductController from './src/controllers/productController.js'
import userController from './src/controllers/user.controller.js';
import express from 'express'
import path from 'path'
import expressEjsLayouts from 'express-ejs-layouts';
import validateRequest from './src/middlewares/expressValidator.js';
import { uploadFile } from './src/middlewares/fileUpload.middleware.js';
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';
import cookieParser from 'cookie-parser';
import { setLastVisit } from './src/middlewares/lastVisit.middileWare.js';



const server=express();


//configure cookie pasrser
server.use(cookieParser())
server.use(setLastVisit );

//session configuration
server.use(session({
    secret:'SecretKey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false},
}))


server.use(express.static('Public'))

//parse form data so the sever can understand the client data
server.use(express.urlencoded({extended: true})); 


// setup view engine for rendering dynamic content in html file
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src','views'))

// use of express 
server.use(expressEjsLayouts);


// create the instance of usercontroller 
 const UserControl=new userController();

// create an instance of ProductController
const ProductController=new prductController();
server.get('/',auth,ProductController.getProducts)

server.get('/new', auth, ProductController.getAddform)


//route for adding new product from the form 
server.post('/', uploadFile.single('imageUrl'),ProductController.AddProduct);

//get register form url
server.get('/register', UserControl.getRegister);
//post request for the register the user 
server.post('/register', UserControl.postRegister);


//login url for login the user 
server.get('/login', UserControl.getLogin);
//post request for login
server.post('/login',UserControl.postLogin);


//logout 
server.get('/logout', UserControl.logout);

//request for update view the product
server.get('/update/:id',auth,ProductController.updateProduct);


//post request for update 
server.post('/update',auth,ProductController.postUpdate)


//delete the product
server.post('/delete-product/:id',auth,ProductController.deleteProduct)

server.use(express.static('src/views'))

server.listen(2500, ()=>{
    console.log("server is listening on http://localhost:2500");
})