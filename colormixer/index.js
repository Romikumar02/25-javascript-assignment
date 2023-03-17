// color mixer
function colormix(color1,color2){
    let resultingcolor;

    
    switch (color1) {
        case 'red':
            
            switch(color2){
                case 'blue':
                    resultingcolor= 'purple'
            }
            break
            switch(color2){
                case 'yellow':
                    resultingcolor='orange'
                    break;
                    switch(color1){
                    case 'blue':
                        resultingcolor='green'
                        break;
                        
                    }
            }
            
            default:resultingcolor='invalid color combination'
                return;
            }
            console.log(resultingcolor)
        }
        colormix('red','blue')