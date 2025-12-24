// reduce  
const myNums = [1, 2, 3] 

const myTotal = myNums.reduce((acc, currval) => {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// const myTotal = myNums.reduce((acc, currval) =>  acc + currval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "python course",
        price : 2999
    },
    {
        itemName : "JS course",
        price : 1999
    },

]

const priceTwo = shoppingCart.reduce((acc, item) => acc + item.price, 0)


console.log(priceTwo);
