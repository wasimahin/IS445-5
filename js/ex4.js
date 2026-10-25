const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100]
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90]
  }
];

for (const student of studentList) {
  for (let i = 0; i < student.scores.length; i++) {
    student.scores[i] += 5;
  }
}

for (const student of studentList) {
  let sum = 0;
  for (const score of student.scores) {
    sum += score;
  }
  student.scores.push(sum / student.scores.length);
}

for (const student of studentList) {
  console.log(`Full name (last, first): ${student.lastName}, ${student.firstName}`);
  console.log(`Updated scores are: ${student.scores}`);
}