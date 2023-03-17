// Final order price function

let cart =(p,q)=>{
    let customercart=[{price:p,
        quantity:q,
        totalprice:q*p
        
    }]
    return customercart;

}

// calculating the final price based on price and quantity

console.log(cart(23,5))