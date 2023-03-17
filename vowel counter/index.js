//  prompt('enter your name')
let name = 'Romi'

    let vowel = 0
    for(let i =0; i<name.length; i++){
        let char = name[i].toLowerCase()
        if(char==='a' || char=== 'e'|| char==='i'||char==='o'|| char==='o'){
            vowel++;
        }
        
    
        
        
    }
    console.log(`the total no. of vowel is :${vowel}`);

