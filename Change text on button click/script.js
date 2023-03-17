// define function for a button to change the text

function btn(){
    const heading = document.getElementById('h1')
    if(heading.textContent==='The most affordable learning platform:'){
        heading.textContent= 'PW Skills';
       
    }
    else{heading.textContent='The most affordable learning platform:';
}
}