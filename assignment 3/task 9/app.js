function countWords(paragraph) {
 
  const words = paragraph.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

// Example usage
const paragraph = "This is an example paragraph with several words.";
const wordCount = countWords(paragraph);
console.log(wordCount);  // Output: 7
