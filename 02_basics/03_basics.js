// two types of declaration 1)literal, 2)constructor

//using constructor
//Object.create

//singleton - when we create a object for *consturctor is a only one of its kind or unique

// object literal

// when object is created with literal the object is not singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "Siddhant",
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "siddhant@gmail.com",
    isloggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

/*******ways to access elements of objects*/

// console.log(JsUser["email"]);
// console.log(JsUser.email);
// console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser)
JsUser.email = "siddhant@google.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user.");
}

// to refer same object user "this" we will get the properties of that object
JsUser.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


