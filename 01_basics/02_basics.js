"use Strict"; //treat all js code a newer version

//alert( 3 + 3)

console.log("hi"); console.log("sid")//not readability should be high

//ECMA script have designed the standards of the JS



// datatype are classified on basis of they are stored in memory and accessed
//primitive and non- primitive

//primitive 7 types: string, number, null, boolean, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
let name = "siddhant"//string "",''
let age = 12//number 2 to power 53
let isLoggedIn = false//boolean false/true
//null => standalone value
//undefined => 
// symbol => uniqueness
//object 
const BigNumber = 2342384823948328938n
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


console.log(typeof "Siddhant");
console.log(typeof null); //object
console.log(typeof undefined);// undefinedl



//reference (Non-Primitive)

//Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]

//key: value pairs in curly braces
let myObj = {
    name: "sid",
    age: 22,
}

// function
const myFunction = function(){
    console.log("hello world");
    
}


// ***********************************************

// Stack (Primitive), Heap(Non-Primitive)

//In stack what every variable we have declared we get the copy of that variable

//If the varible is in Heap memory we get the reference of the variable so whatever change we will make the change variable in original location memory will happen



let myAccountName = "hero@gmail.com"
let anotherAccount = myAccountName;

anotherAccount = "sid@gmail.com"

console.log(myAccountName);
console.log(anotherAccount);

let userOne = {
    email: "user@gmail.com"
}

let userTwo = userOne

userTwo.email = "sid@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
