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

const lastNameStartsWithC = student => student.lastName.startsWith("C");

const getMinScore = scores =>
  scores.reduce((min, score) => (score < min ? score : min), scores[0]);

const getMaxScore = scores =>
  scores.reduce((max, score) => (score > max ? score : max), scores[0]);

const getAvgScore = scores =>
  scores.reduce((sum, score) => sum + score, 0) / scores.length;

const toResult = student => ({
  firstName: student.firstName,
  lastName: student.lastName,
  minScore: getMinScore(student.scores),
  maxScore: getMaxScore(student.scores),
  avgScore: getAvgScore(student.scores)
});

const cLastNameResults = studentList.filter(lastNameStartsWithC).map(toResult);

console.log(cLastNameResults);