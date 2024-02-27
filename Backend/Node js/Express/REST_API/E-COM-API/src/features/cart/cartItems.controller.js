import cartItemsModel from "./cartItems.model.js";
export default class cartItemsController{

    add(req, res){
        
        const productID=req.query.productID;
        const quantity=req.query.quantity;
        const userID=req.userID;

        const error=cartItemsModel.add(userID, productID, quantity);

        if(error){
            return res.status(400).send(error);
        }else{
            return res.status(200).send("Product added to your cart");
        }
    }


    get(req, res){
        const userID=req.userID;
        const items =cartItemsModel.get(userID);
        return res.status(200).send(items)
    }


    deleteCartItems(req, res){

        const userID=req.userID;
        const  cartItemID=req.params.id;
        const error=cartItemsModel.deleteCartItems(cartItemID, userID);

        if(error){
            return res.status(400).send(error);
        }else{
            return res.status(200).send("Items Deleted");
        }
    }

}