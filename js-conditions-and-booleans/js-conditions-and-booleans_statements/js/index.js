console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
// const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

// const number = 7;

if (number % 2 === 0) {
  console.log("Even number.");
} else {
  console.log("Odd number.");
}
// Part 3: Hotdogs
const numberOfHotdogs = 99;
let price;

if (numberOfHotdogs < 5) {
  price = numberOfHotdogs * 2;
} else if (numberOfHotdogs < 100) {
  price = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs < 1000000) {
  price = numberOfHotdogs * 1;
} else {
  price = numberOfHotdogs * 0.1;
}

console.log("Price of hotdog: ", price);

// Part 4: Daytime
// const currentHour = 12;
const currentHour = 21;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
