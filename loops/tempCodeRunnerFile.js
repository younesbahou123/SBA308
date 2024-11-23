const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Calculate the average age
function calculateAverageAge(data) {
  let totalAge = 0;
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    const age = parseInt(data[i].age); // Parse age as integer
    if (!isNaN(age)) { // Ensure the age is a valid number
      totalAge += age;
      count++;
    }
  }

  return count === 0 ? 0 : totalAge / count; // Return average
}

// Compute and log the result
const averageAge = calculateAverageAge(data);
console.log("Average Age:", averageAge);