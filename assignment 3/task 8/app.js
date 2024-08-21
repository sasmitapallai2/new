function repeatedSumOfDigits(num) {
    while (num >= 10) {
      num = num
        .toString()           // Convert the number to a string
        .split('')            // Split the string into an array of digits
        .reduce((sum, digit) => sum + Number(digit), 0); // Sum the digits
    }
    return num;
  }
  
  // Example usage
  const result = repeatedSumOfDigits(456);
  console.log(result);  // Output: 6
  