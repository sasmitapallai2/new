let string = 'INDIA';

// Convert the string into an array of characters
let charArray = string.split('');

// Use splice to add "ONES" after "IND"
charArray.splice(3, 0, 'O', 'N', 'E', 'S');

// Join the array back into a string
let newString = charArray.join('');

console.log(newString); // Output: 'INDONESIA'
