//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    console.log(element);
}

// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);          
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);          
        // console.log((i + '*' + j + "=" + i*j));
        
    }    
}


let myArray = ["flash", "batman", "superman"]

for(let i = 0; i < myArray.length; i++) {
    const element =  myArray[i];
    // console.log(element);
}

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        // break // exit the loop
        continue // skip the itteration for that respective condition
        
    }
    console.log(`Value of i is ${i}`);
        
}
//