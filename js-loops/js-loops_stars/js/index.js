console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let star = 1; star <= 5; star++) {
    const emptyStar = document.createElement("img");
    emptyStar.src = "assets/star-empty.svg";
    starContainer.appendChild(emptyStar);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
