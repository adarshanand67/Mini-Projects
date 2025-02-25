import fetch from "node-fetch";

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

console.log(typeof obj);
console.log(obj);

const employee_details = [
  {
    id: 1,
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    id: 2,
    name: "Peter",
    age: 25,
    city: "London",
  },
];

console.log(typeof employee_details);
console.log(employee_details);

// get all names
employee_details.forEach((element) => {
  console.log(element.name);
});

const stringified = JSON.stringify(employee_details);
console.log(typeof stringified);
console.log(stringified);

// fetch(url)
//   .then((response) => response.json())
//   .catch((error) => console.log(error))
//   .then((data) => {
//     console.log(data[0].name);
//   });

const url = "https://jsonplaceholder.typicode.com/comments";
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data[0].name);
}
getData();
