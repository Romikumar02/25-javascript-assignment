let number = [ 3,6,9,12,15,18]
let newnumbers = number.filter((key)=>{
   return key%3===0 && key%2!=0
})
console.log(newnumbers)