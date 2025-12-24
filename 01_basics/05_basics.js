// Number and Maths
const score = 400

const balance = new Number(400)
console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.49444

console.log(otherNumber.toFixed(2));
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

/*********************maths*************************/
console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));//4.2 =>5
console.log(Math.floor(4.2));//4.9 =>4 
console.log(Math.min(4,2,4,5,6));
console.log(Math.max(4,2,4,5,6));
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10 + 1));
console.log(Math.floor(Math.random()*10 + 1));

const random = Math.random()
console.log(random);
// console.log(random*10);

const min = 10;
const max = 20;

const increaser = max - min + 1
console.log(increaser);

const control = random * (increaser)
console.log(control);

console.log(Math.floor(control) + min);

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


