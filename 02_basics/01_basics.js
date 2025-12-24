//Arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["Dad", "mom"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr);
// console.log(myArr[0]);

//Array Methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(9) //add element at start
// myArr.shift() //remove element at start
// console.log(myArr.includes(3)); //finds the elememt 
// console.log(myArr.indexOf(2)); //returns element at index position

const newArr = myArr.join()// join converts element in array into string

// console.log(myArr);
console.log(newArr);

//slice, splice 
console.log(myArr);

console.log(myArr.slice(1,3)); //retrun 1,2 and not 3
const myn2 = myArr
console.log(myn2);

console.log(myn2.splice(1,3)); //return 1,2,3 and permanently remove the sliced values and
console.log(myn2);

 

