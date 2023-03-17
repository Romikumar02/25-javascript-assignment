
let username = input("enter your name: ")
// capitalizing the first letter of name.

let modifiedname =  username.charAt(0).toUpperCase() + username.slice(1)
modifiedname = username[0].toLowerCase()===username[0]? modifiedname : username; 
console.log(modifiedname)