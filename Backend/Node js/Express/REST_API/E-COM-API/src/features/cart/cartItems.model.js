
export default class cartItemsModel{


    constructor(productID, userID, quantity, id){
        this.productID=productID;
        this.userID=userID;
        this.quantity=quantity;
        this.id=id;
    }

    static add(productID, userID, quantity){
        const cartItem=new cartItemsModel(
            productID,
            userID,
            quantity
             );
        cartItem.id=cartItems.length+1;
        cartItems.push(cartItem);
        return cartItem;
    }

    static get(userID){
        return cartItems.filter((i)=>i.userID==userID);
    }



    static deleteCartItems(cartItemID, userID){
        const cartItemIndex=cartItems.findIndex((i)=>i.id==cartItemID && i.userID==userID);
        if(cartItemIndex==-1){
            return "Item not found";
        } else{
           
            cartItems.splice(cartItemIndex, 1);
        }
    }

}


var cartItems=[
    new cartItemsModel(1,2,1,1),
    new cartItemsModel(1,2,1, 1)
    
]