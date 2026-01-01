
//using the Class syntex
// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptpassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// //create a new user
// const chai = new User("chai", "chai@gmail.com", "123")
// console.log(chai.encryptpassword());
// console.log(chai.changeUsername());


//behind the scene
//how thing are working if not using class syntax

function User(username, email, password){//function also behave like object
    this.username = username
    this.email = email
    this.password = password
}

//adding the properties
User.prototype.encryptpassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptpassword());
console.log(tea.changeUsername());

