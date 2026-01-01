function setUserName(username){
    this.username = username
    console.log("called");
    
}

function createUser(username, email ,password){
    // setUserName(username)//here we are getting the exection context but when called and also runs but then the variables declared in it and removed from call stack and not hold it.
    setUserName.call(this, username)// ".call" hold the reference the of the function called just not run it. then passing "this" parameter take all the varables in it and passed it to the called function

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "sid@gmail.com", 12345)
console.log(chai); 
