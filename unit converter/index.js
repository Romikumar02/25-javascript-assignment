// function to convert celcius to fahrenheit

function tempconverter(celcius){
    const conversionformula = Math.floor((1.8*celcius) + 32)
    console.log(`the temperature in fahrenheit is ${conversionformula}`)

}
tempconverter(37)