const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

// Use map to transform the array
const output = students.map(student => {
    // Calculate the average score using reduce
    const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    
    // Return the transformed object
    return { name: student.name, average: average };
});

console.log(output);
