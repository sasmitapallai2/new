function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

// Example usage
const inputSentence = "I love Javscript!";
const correctedSentence = correctfn(inputSentence, "Javscript", "JavaScript");
console.log(correctedSentence);  // Output: I love JavaScript!
