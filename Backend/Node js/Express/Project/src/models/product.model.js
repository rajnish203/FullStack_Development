export default class ProductModel {
    constructor(_id, _name, _desc, _price, _imageUrl) {
        this.id = _id
        this.name = _name
        this.desc = _desc
        this.price = _price
        this.imageUrl = _imageUrl
    }
    static get() {
        return products
    }

    static addNew(name, desc, price, imageUrl){
        // user can not give the id at the time of product this work is automaticall done by the model

        let newProduct=new ProductModel(
            products.length+1,
            name,
            desc,
            price,
            imageUrl);
        products.push(newProduct);
        
    }

    static getById(id){
        return products.find(p=>p.id==id);
    }

    static updateExistProduct(prodObj){
       const index= products.findIndex((p)=>p.id==prodObj.id);
        products[index]=prodObj;
    }

    // Delete the model data
    static deleteExistingProduct(id){
        const index = products.findIndex((p) => p.id === id);

            products.splice(index, 1);
    }
}
var products = [
    new ProductModel(
        1,
        'You can',
        'Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? Through the empowering self-help manual you can, penned to promote personal growth and well-being for anyone who reads it, George Matthew Adams talks about things to be done to pave your way to a fulfilling, successful life',
        19.99,
        'https://m.media-amazon.com/images/I/81T05w0B3lL._AC_UY327_FMwebp_QL65_.jpg',
    ),
    new ProductModel(
        2,
        'Japenese Secret',
        'Description for Product 2',
        29.99,
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
        3,
        'Deep Work ',
        'Description for Product 3',
        39.99,
        'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
    )
]
