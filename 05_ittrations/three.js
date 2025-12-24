//For Arrays use "for of" loop

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`Each cha is ${greet}`);
    
}

//Maps /**hold the key-value pair of any object
// not duplicate values only unique
// any of key or value can be used */

const map = new Map()//Iteratable
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    game1: "NFS",
    game2: 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);    
// }
