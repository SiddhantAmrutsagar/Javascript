const user = {
    username: "Siddhant",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log((user.getUserDetails()));
// console.log(this);


// monday from which weak? here this concept is user .this means we are talking about monday of this weak 

// const promiseOne = new Promise()
// const date = new Date() // "new" => constructor function, allows us to create multiple and new instances of One object literal

// so "new" is the create a new context or instance of the object

function User(username, loginCount, isloggedIn){
    // username = username
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }


    return this //even this is not define it will by default return
}

const userOne = new User("siddhant", 12, true )
const userTwo = new User("Sid", 11, false)// this will overwrite the the userOne
console.log(userOne.constructor);// constructor is a reference of itself
// console.log(userTwo);

/*new => when new keyword is used a new empty object is created this is called as instance 
//this=>1) and new empty object "{}" is created as many times "this" is used
        2) a constructor function is call due to new keyword which give all the arguments packed in it
        3)then ".this" we can use in the function

*/          

