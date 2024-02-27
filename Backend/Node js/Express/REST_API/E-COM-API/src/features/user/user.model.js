export  default class userModel{
    constructor(name, email, password, typeOfuser, id){
        this.name=name;
        this.email=email;
        this.password=password;
        this.typeOfuser=typeOfuser;
        this.id=id;
    }

    static signUp(name, email, password, type, id){
        const newUser=new userModel (
             name,
             email,
             password, 
             type,
            );
            newUser.id=users.length+1;
       users.push(newUser);
        return users;
    }
    static signIn(email, password){
        console.log(email, password);
        const user=users.find((u)=>
        u.email==email && 
        u.password==password);

        return user;
    }


    static getAll(){
        return users;
    }

}



let users=[
    {    id:1,
        "name":"Seller User",
        "email":"seller@gmail.com",
        "password":"Password",
        "type":"selller" 
    },
    {    id:2,
        "name":"Admin",
        "email":"prabh@gmail.com",
        "password":"Password1",
        "type":"Admin" 
    },
]