let economy= 4000;
let midsize = 10000;
let luxury = 20000;
// function to create rental cost

function rentalcostcalculator(car, days){
    
    if(car===economy){
        console.log(4000*days)
    }
    else if(car===midsize){
        console.log(10000*days)
    }
    else if(car===luxury){
        console.log(20000*days)
    }
    else{console.log('invalid input')}

}
rentalcostcalculator(luxury,7)