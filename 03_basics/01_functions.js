function sayMyName(){
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result    
    return number1 + number2
}


const result = addTwoNumbers(1, 4)

// console.log("Result: ",result);

function loginUserMessage(username = "Sam"){
    if (!username) {
        console.log("Please Enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

// console.log(loginUserMessage());undefined just logged in


function calculateCartPrice(val1, val2, ...num1){//spread method
    return num1
}

// console.log(calculateCartPrice(200,300,400, 2000));

const user = {
    username:"Siddhant",
    price: 112
}

function handleObject(anyobject){ //use anyobject as a parameter for incoming argument
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}rs`);
    
}

handleObject(user) 
        //or
// handleObject({
//     username:"Siddhant",
//     price: 112
// })

const myNewArray = [200,400,100,500]

function retrunValues(getArray){
    return getArray[1]
}

// console.log(retrunValues(myNewArray))
                //OR
console.log(retrunValues([100,200,300]))