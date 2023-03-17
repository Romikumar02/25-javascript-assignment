let listitems = ["HTML and Semantics",
"Starting with CSS",
"Working Template",
"Mobile responsive webpages",
"Grid and Flex-box in CSS",
"Projects using HTML & CSS",
"Version Control and Git",
"Getting Started with JavaScript",
"Advance JavaScript",
"Working with DOM",
"Making Projects using HTML CSS and JavaScript",
"Understanding Fundamental of Computer Science",
"Getting Started with Database",
"Understanding the Database",
"Starting with NodeJS and Express",
"Understanding React and its Fundamentals",
"Understanding Hooks and Routers",
"Starting and Completing Full Fledge Projects"]
console.log(listitems);

// 


// function to add listitems to unordered list

let i = 0;
let li = document.getElementById('li')
let btn = document.getElementById('btn')

function additem(){
    if(i<listitems.length){
        const newlistitem =document.createElement('li')
        newlistitem.textContent = listitems[i];
        li.appendChild(newlistitem);
        i++;
    }
    else{
        alert('all item has been added!!')
    }
}    
        

