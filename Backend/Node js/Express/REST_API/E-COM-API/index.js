// 1. Import express
import express from 'express';
import authorizer from './src/middlewares/basicAuth.middleware.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
// import bodyParser from 'body-parser';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import cartItemRouter from './src/features/cart/cartItems.routes.js';
import bodyParser from 'body-parser';
// 2. Create Server
const server = express();

server.use(bodyParser.json());
// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use("/api/products", jwtAuth,productRouter);

server.use("/api/users", userRouter);

server.use("/api/cartItems", jwtAuth, cartItemRouter);


// 3. Default request handler
server.get('/', (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
});

// 4. Specify port.
server.listen(3200,()=>{
    console.log("Server is running at http://localhost:3200");
});

