/**
 * Temperature Converter

Write a program that converts temperatures between Celsius and Fahrenheit.
Ask the user for a temperature and whether they want to convert it to Celsius or Fahrenheit, then display the result.
 
* */


//prompting user to enter temp-value
let temp =  parseFloat(prompt("Enter the tremperature value:"));

// prompting user for the conversion type
let conversionType = prompt("Do you want to convert to Celsius or Farenheit. Enter C or F:");

// handling conversiontype
if (conversionType === 'C' || conversionType === 'c'){
    // convert farenheit to celcius
    let celsius = ((temp - 32) * 5/9 );
    console.log(`${temp} Farenheit is equal to ${celsius.toFixed(2)} Celcius`)

} else if(conversionType === 'F' || conversionType === 'f'){
    let farenheit = ((temp * 9/5) + 32);
    console.log(`${temp} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit`)

} else {
    console.log("Invalid option. Try Again!")
}

