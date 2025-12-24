//scope 
//Global scope
var c = 300
let a = 11


if(true){//block Scope
    let a = 10// change her should not reflect outside the scope of "if"
    const b = 20
    c = 30//but using "var" as data type make change reflect outside the scope********* Avoid using "var"
}

// console.log(a); // 'a' and 'b' will not print because it is out of scope of "if" scope
// console.log(b);
// console.log(c);

function one(){
    const username = "Siddhant"

    function two(){
        const website = "youtube"
        // console.log(username);
    }

    // console.log(website); //out of scope access
    two()
}

one()

if(true){
    const username = "Siddhant"
    if(username === "Siddhant"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);



// Ways of function Definations and Declaration
console.log(addone(5))

/**********this syntax can run before initialization*********/
function addone(num){
    return num + 1
}

// addone(5)

// const addTwo = function add(num){
//     return num + 2
// }


// console.log(addTwo(5))
/*****this syntax cannot run before initialization******/
const addTwo = function (num){
    return num + 2
}
console.log(addTwo(5))

// ----this is the concept of Hoising---------/



