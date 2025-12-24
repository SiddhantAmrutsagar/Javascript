const coding = ["js", "ruby", "java", "python", "cpp"]


// forEachPerforms the specified action for each element in an array.
// const values = coding.forEach( (item) => { 
//     console.log(item);
//     // return item //forEach does not return any value for array
    
// } )

// console.log(values);

/*****************Filters********************/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter( (num) => { 
//     return num > 4 //explicitely return
// } )


// newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// });
// console.log(newNums);

// Whenever the scope is open {}we have to use return keyword to return value.
// we scope is not opened the no need to return value bydefault function will return value.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let userBooks = books.filter( (bk) => bk.genre == "History")
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
})

console.log(userBooks);
