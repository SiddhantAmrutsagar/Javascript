// javascript has a bydefault prototypal behaviour

//function can be used as a function as well as object
function multipleBy5(num){
    return num* 5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username// ".this" tell us which username is ours and which username we are getting from the parameters
    this.score = score 
}

createUser.prototype.increment = function (){
    this.score++ //whoever calls createUser increament it's score    
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()