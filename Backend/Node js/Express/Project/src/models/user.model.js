var users=[];
export default class userModel{
    constructor(_id, _name, _email, _password){
        this.id=_id
        this.name=_name
        this.email=_email
        this.password=_password
    
    }
    static get() {
        return users
    }
    static add(name, email, password){
        const newUser=new userModel(users.length+1, name, email, password );
        users.push(newUser);
    }

    static isValidUser(email, password) {
        const result=users.find((u)=> u.email==email && u.password==password)
        return result;
    
    }
        

    
}

