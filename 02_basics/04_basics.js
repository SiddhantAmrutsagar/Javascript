//literal object Declaration
// const tinderUser = {}

// Singleton Object Declaration     


const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName: {
            firstName: "Siddhant",
            lastName: "Amrutsagar"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2) //assign(target: {}, source1: { 1: string; 2: string; })
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },{
        id:1,
        email:"s@gmail.com"
    },
]

user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


/***************Destructuring the Object**************/
const course = {
    coursename: "jsCourse",
    price: "299",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);

//Api we get some values from backend in json format
                                                                                   