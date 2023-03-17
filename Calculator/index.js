// Calculator
function calculator(num1,num2,operators) {
   let result;
    switch (operators) {
        case '+':
        result=num1+num2
            
            break;
        case '-':
        result=num1-num2
            
            break;
        case '*':
        result=num1*num2
            
            break;
        case '/':
        result=num1/num2
            
            break;
    
        default: console.log("invalid operator")

            return;
        }
        console.log(result)
    }
      calculator(3,5,'+')

