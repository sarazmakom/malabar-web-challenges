console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const articleElement = document.createElement("article");
const pElement = document.createElement("p");
const footerElement = document.createElement("footer");
const spanElement = document.createElement("span");
const buttonElement = document.createElement("button");

articleElement.className = "post";
pElement.className = "post__content";
footerElement.className = "post__footer";
spanElement.className = "post__username";
buttonElement.className = "post__button";

pElement.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
spanElement.textContent = "@username";
buttonElement.textContent = "♥ Like";

articleElement.append(pElement, footerElement);
footerElement.append(spanElement, buttonElement);

document.body.append(articleElement);

/* 
<article class="post">
      <p class="post__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <footer class="post__footer">
        <span class="post__username">@username</span>
        <button type="button" class="post__button" data-js="like-button">
          ♥ Like
        </button>
      </footer>
    </article>
*/
