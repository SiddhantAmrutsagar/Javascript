const user = {
    username: "Siddhant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        //to access all the variable in this object scope we use ".this"
        //refers the current context(values).
    }
}

// user.welcomeMessage()
// user.username = "Sid"// here we changed the context of username to "Sid". so now this refers to context of username = "Sam"
// user.welcomeMessage()

// console.log(this); //now we are running this code in Node environment so it will return "{}"

// previously the engine that run the js was in Browser and now as we took it outside and run the js independently

// function chai(){
//     let username = "Siddhant"
//     // console.log(this);
//     console.log(this.username);// this only refers to the context within object not of function 

// }

// **********here also this do not refer the context********/
// const chai = function(){
//     let username = "Siddhant"
//     console.log(this.username);
    
// }

const chai = () =>{
    let username = "Siddhant"
    console.log(this);
    
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //implecit return
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Siddhant"})

console.log(addTwo(2,4));

// Declare function using arrow function 

const myArray = [1,2,3,4,5]

myArray.forEach(() => {})