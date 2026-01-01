class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){//statics => stops the access to the function
        return `123`
    }
}

const siddhant = new User("siddhant")
// console.log(siddhant.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")

iphone.logMe()
console.log(iphone.createId())