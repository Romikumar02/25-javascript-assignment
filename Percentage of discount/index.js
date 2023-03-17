// function to calculate the discount percentage
const discountcalculator =(orignalprice,disprice)=>{
    const discount= orignalprice-disprice;
    const dispercentage= discount/orignalprice*100
    return dispercentage.toFixed(2);
};

//  define the original price and discount price
  let product1 ={
    Originalprice: 500,
    discountprice: 100,
    discountpercentage: discountcalculator(500,100)

 }
 console.log(product1)
