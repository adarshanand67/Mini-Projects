// Higher order functions - Functional programming

const radius = [1, 2, 3, 4];

// find area of all the radius
const area = function (radius) {
  return Math.PI * radius * radius;
};
const diameter = function (radius) {
  return radius * 2;
};
const circumference = function (radius) {
  return 2 * radius * Math.PI;
};

console.log(radius.map(area));
console.log(radius.map(diameter));
console.log(radius.map(circumference));

// We can do Array.prototype to access using . operator
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));

// Map, filter,reduce
const arr = [4, 2, 4, 1, 2, 7];

// 1. Map
const double = arr.map((x) => x * 2);
console.log(double);

const binary = arr.map((x) => x.toString(2));
console.log(binary);

// 2. Filter
function isOdd(val) {
  return val % 2;
}
const odd = arr.filter(isOdd);
console.log(odd);

// 3.Reduce
const sum = arr.reduce((accumulate, current) => accumulate + current);
const max = arr.reduce((accumulate, current) =>
  accumulate > current ? accumulate : current
);
const min = arr.reduce((accumulate, current) =>
  accumulate < current ? accumulate : current
);
const product = arr.reduce((accumulate, current) => accumulate * current);
const avg =
  arr.reduce((accumulate, current) => accumulate + current) / arr.length;
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
const gcdOfArray = arr.reduce((accumulate, current) =>
  gcd(accumulate, current)
);

console.log(sum);
console.log(max);
console.log(min);
console.log(product);
console.log(avg);
console.log(gcdOfArray);

// Examples
const users = [
  { firstName: "John", lastName: "Doe", age: 20 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "John", lastName: "Smith", age: 40 },
  { firstName: "Jane", lastName: "Smith", age: 50 },
];

// {20:1, 30:1, 40:1, 50:1}
const ageCount = users.reduce((accumulate, current) => {
  if (accumulate[current.age]) {
    accumulate[current.age]++;
  } else {
    accumulate[current.age] = 1;
  }
  return accumulate;
}, {});

console.log(ageCount);

// Full names {"John Doe", "Jane Doe", "John Smith", "Jane Smith"}
const fullNames = users.reduce((accumulate, current) => {
  accumulate.push(`${current.firstName} ${current.lastName}`);
  return accumulate;
}, []);
console.log(fullNames);

// Full names with age 20
const fullNamesWithAge = users.reduce((accumulate, current) => {
  if (current.age === 20) {
    accumulate.push(`${current.firstName} ${current.lastName}`);
  }
  return accumulate;
}, []);

console.log(fullNamesWithAge);
