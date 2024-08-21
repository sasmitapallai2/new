const students = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

function calculateAverage(students) {
  const result = {};

  Object.keys(students).forEach(student => {
    const subjects = students[student];
    const total = Object.values(subjects).reduce((sum, score) => sum + score, 0);
    const average = total / Object.keys(subjects).length;

    result[student] = {
      average: average.toFixed(2) // Optional: rounding to 2 decimal places
    };
  });

  return result;
}

const averageScores = calculateAverage(students);
console.log(averageScores);
