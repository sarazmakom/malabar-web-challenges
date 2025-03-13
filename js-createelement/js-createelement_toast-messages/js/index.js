console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newToastMessage = document.createElement("li");
  newToastMessage.className = "toast-container__message";
  newToastMessage.textContent = "I'm a new toast message";
  toastContainer.append(newToastMessage);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
