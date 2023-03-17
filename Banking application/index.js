let customer1 ={
    balance: 0
}
let customer2 ={
    balance: 0
}
let customer3 ={
    balance: 0
}

// Function to deposit an amount to a customer's account

function deposit(customer,amount){
    customer.balance+= amount;
    console.log(`amount: ${amount} deposited sucessfully`)
    return 
}
// Function to withdraw an amount to a customer's account

function withdraw(customer,amount){
    if(customer.balance<amount){
        console.log('insufficient balance');
    }
    else{
        customer.balance-=amount;
        console.log(`amount: ${amount} withdrawl sucessfully`)
    }
    return;

}
console.log(deposit(customer1,30000))
console.log(withdraw(customer1,5000))
console.log(customer1)


