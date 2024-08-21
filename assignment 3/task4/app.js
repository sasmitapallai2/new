function countVowelsAndConsonants(str) {
  // Convert the string to lowercase to make the check case-insensitive
  str = str.toLowerCase();
  
  // Define the vowels
  const vowels = 'aeiou';
  
  // Initialize counters for vowels and consonants
  let vowelCount = 0;
  let consonantCount = 0;
  
  // Iterate through each character in the string
  for (let char of str) {
      if (vowels.includes(char)) {
          vowelCount++;
      } else if (char >= 'a' && char <= 'z') {
          consonantCount++;
      }
  }
  
  return { vowelCount, consonantCount };
}

// Example string with at least 20 characters
let string = "The quick ";

// Get the counts
let counts = countVowelsAndConsonants(string);

console.log(`Vowels: ${counts.vowelCount}`); // Output: Vowels: 11
console.log(`Consonants: ${counts.consonantCount}`); // Output: Consonants: 24
