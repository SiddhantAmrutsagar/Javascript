/**Promises => whatever task given to promise added in the queue will not immeditally loaded and completed   */


const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async Task is completed');
        resolve()//if task is resolved then you can consume the promise
    }, 1000);
})

promiseOne.then(function(){//."then" is connected with the resolve 
    console.log("Promise consumed");
    
})


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "sid", email:"sid@example.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

const promisefour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "sid", password:"123"})
        }else{
            reject('Error: something went wrong')
        }
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
    
})
.finally(() => console.log("The promise is either resolved or rejected"))//this will definately run and will tell does your task is completed or not

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){                                        
            resolve({username: "javascript", password:"123"})
        }else{
            reject('Error: Js went wrong')
        }
    },1000)
})


//writing a function using with async handler
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()

// async function getAllUser(){
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(responce);
//         const data = await responce.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// getAllUser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{ // now hold this response
    console.log(data);
})
.catch((error) => {
    console.log(error);
})




