import  express  from "express";

import cartItemsController from "./cartItems.controller.js";

const cartItemRouter=express.Router();

const cartcontroller=new cartItemsController();

cartItemRouter.post('/:id', cartcontroller.deleteCartItems)

cartItemRouter.post('/', cartcontroller.add);

cartItemRouter.get('/',cartcontroller.get);

export default cartItemRouter;