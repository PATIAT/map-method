  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for(let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()

const multiplyByTwo = nums.map(function (num) { return num * 2});

console.log(multiplyByTwo);


// Simplified w/ map()
const simplified = nums.map(num => num * 2);
console.log(simplified);

// Simplfied w/ map() + arrow function


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// using map() to return an array of specific array elements
//const studentWithIds = students.map(student => [student.name, student.id]);
//console.log(studentWithIds);

// using map() to return an object of specific object properties and values
//const studentWithIds = students.map(student => ({ name: student.name, id: student.id }));
//console.log(studentWithIds);

const newObject = students.map(student => ( {age: student.age = 23}));
console.log(newObject);