console.clear();

const input = document.querySelector('[data-js="first-input"]');
const upperCaseButton = document.querySelector('[data-js="button-uppercase"]');

upperCaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});
