console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorElement = document.querySelector(".error");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const firstNumber = Number(event.target.firstNumber.value);
    const secondNumber = Number(event.target.secondNumber.value);
    const operation = event.target.operation.value;
    output.innerText = operations[operation](firstNumber, secondNumber);
  } catch (error) {
    errorElement.innerText =
      "Can't divide by zero! Try again with a number that is not zero.";
  }
});
