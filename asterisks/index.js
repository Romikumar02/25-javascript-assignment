// number of rows for the triangle pattern
 i=5;
 // Loop through each row of the triangle pattern
 for (let row =i; row>=1; row--){
     // Define an empty string to hold the asterisks for this row
let asterisks = '';
 // Loop through each column of the current row
 for (let col = 1; col <= row; col++) {
    // Add an asterisk to the current row for each column
    asterisks += "*";
  }

  // Print the current row of asterisks to the console
  console.log(asterisks);
}

 