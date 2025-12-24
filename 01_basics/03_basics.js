// conversion and operations
let score = "33abc"
// let score = null //0
// let score = undefined //NaN
// let score = true //1


//"33" => 33
//"33abc" => NaN
//ture => 1;

console.log(typeof score);
console.log(typeof(score)); //as a method

// const {score} =  req.body;

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN - not a number


let isLoggedIn = 1
// let isLoggedIn = "sid" //ture
// let isLoggedIn = "" //false

// 1 => true
// "sid" => true
// "" => false



let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);


//****************operation***********************///////////

let value = 3
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);

let str1 = "hello"
let str2 = " sid"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
//gameCounter++
console.log(gameCounter);


//************comparision*******************/
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);//comparision converted null to 0
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);


console.log("2" === 2);







