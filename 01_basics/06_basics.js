//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2022,5,12, 12,0,0) //single digit months starts from 0
let myCreatedDate = new Date("2022-06-12") //YYYY-MM-DD digit months starts from 1

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime());
// console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));







