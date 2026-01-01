class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)// does the behind the scene working of context referring of the parameter and take it to the function and execute is 
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }

}

//new user

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()
// chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
