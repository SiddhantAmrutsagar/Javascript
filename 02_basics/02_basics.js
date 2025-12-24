const marval_heros = ["thor", "Ironman", "Spiderman"]
const Dc_heros = ["Superman", "Batman", "flash"]

/***************methods to merge arrays*************/

// marval_heros.push(Dc_heros)
// console.log(marval_heros[3][1]);

// const all_heros = marval_heros.concat(Dc_heros)
// console.log(all_heros);


/***********Spread Operator***************/
// const all_new_heros = [...marval_heros,...Dc_heros]
// console.log(all_new_heros);

// const another_arr = [1,2,3,4,[5,6,7,[8,9]]]

// const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr);

console.log(Array.isArray("siddhant")); //find element in array or Not
console.log(Array.from("siddhant")); //Coverts any input into array
console.log(Array.from({name:"siddhant"})); //here it confuse of which to make array of whether of key or values instead just return blank array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



