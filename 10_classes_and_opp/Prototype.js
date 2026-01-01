myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }

}

Object.prototype.siddhant = function(){
    console.log(`Siddhant is present in all objects`);
    
}


Array.prototype.heySiddhant = function(){
    console.log(`Siddhant says hello`);
    
}

// heroPower.siddhant()
myHeros.siddhant()
heroPower.heySiddhant()// function can't access the prototypes
myHeros.heySiddhant()// array can access the prototypes

const Teacher = {
    makeVideo: true
}

