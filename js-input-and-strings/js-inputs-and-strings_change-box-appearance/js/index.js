console.clear();

const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

colorInput.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${colorInput.value}, 70%, 60%)`;
});
