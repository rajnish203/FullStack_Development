// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import  UserController  from './user.controller.js';

// 2. Initialize Express router.
const userRouter = express.Router();
const userController = new UserController();

// All the paths to the controller methods.
// localhost/api/products 
// localhost:4100/api/products/filter?minPrice=10&maxPrice=20&category=Category1


userRouter.post('/signUp', userController.signUp);
userRouter.post('/signin', userController.signIn);

export default userRouter;