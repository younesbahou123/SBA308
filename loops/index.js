//  ALAB 308.3.1

let i ;
for(i=1 ;i<=100 ; i++){
    if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("Buzz ,Fizz")
    }
    else{
        console.log(i) 
    }
    
}

// Declare an arbitrary number n
let n = 13; // You can set this to any starting value

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Not a prime number
  }
  return true; // Prime number
}

// Loop to find the next prime number starting from n
while (true) {
  n++; // Increment n
  if (isPrime(n)) {
    console.log(`The next prime number is: ${n}`);
    break; // Exit the loop as soon as a prime is found
  }
}
 //part 3:

 const csv="id,name,occupation,age\n 42,Bruce,Knight,41\n 57,Bob,Fry Cook,19\n 63,Blaine,Quiz Master,58\n 98,Bill,Doctor's Assistant,26";
 const rows = csv.split("\n");
 // split by rows
 rows.forEach(row => {
  const columns=row.split(",");
  //split each row by columns
  console.log(columns);
 });

                                                            // ALAB 308.4.1


// Part 1: Refactoring Old Code
// i examine the code from previuos alab


//  Part 2: Expanding Functionality
const csv="id,name,occupation,age\n 42,Bruce,Knight,41\n 57,Bob,Fry Cook,19\n 63,Blaine,Quiz Master,58\n 98,Bill,Doctor's Assistant,26";
 const rows = csv.split("\n");  // split by rows
 
 rows.forEach(row => {
  const columns=row.split(","); //split each row by columns
  
  console.log(columns);
 });




 // Part 3: Transforming Data
 // rows into objects
 const rows=[
  ["id","Name","occupation","age"],
  [42,"Bruce","Knight",41],
  [57,"Bob","Fry Cook",19],
  [63,"Blaine","Quiz Master",58],
  [98,"Bill","Doctors Assistant",26]
];
function transformRowsToObjects(rows) {
  const [headers, ...dataRows] = rows;
  return dataRows.map(row =>
    row.reduce((obj, value, index) => {
      obj[headers[index]] = value; // Assign header as key and row value as value
      return obj;
    }, {})
  );
}

const result = transformRowsToObjects(rows);
console.log(result);





//Part 4: Sorting and Manipulating Data
// remove the last element
const rows2=[
  ["id","Name","occupation","age"],
  [42,"Bruce","Knight",41],
  [57,"Bob","Fry Cook",19],
  [63,"Blaine","Quiz Master",58],
  [98,"Bill","Doctors Assistant",26]
];
rows2.pop(); // remove the last element from the sorted array.
console.log(rows2)
const newObject = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

rows2.splice(1,0,newObject); // insert at index 1
console.log(rows2);
rows2.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });//add element to end of an array.
console.log(rows2);

// calculate average age 

// Array of objects with age values
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