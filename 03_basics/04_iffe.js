// Immediately Invoked Funtion Expression(IIFE)

// to remove the pollution problem of due to variable global scope  we
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // here we have to use the ";" to tell JS were did the context of the iife is ending.
//()() also as chai()
                                                
( (name) => {
    console.log(`DB CONNECT TWO ${name}`);
} )("Siddhant")

