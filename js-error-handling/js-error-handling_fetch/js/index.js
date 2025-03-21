console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");
    if (!response.ok) {
      throw new Error(`Error! The user doesn't exist. Status code ${response.status}`);
    }

    if (!contentType.includes("application/json")) {
      throw new Error(`Error! The content type should be application/json and this is a: ${contentType}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);
    if (result.error) {
      errorElement.textContent = result.error;
      userElement.innerHTML = "No user data available.";
      errorElement.innerHTML = `<p class="error" data-js="error">${error}</p>`;
      errorElement.innerHTML = `<p class="error" data-js="error">${contentType}</p>`;
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
    }
    errorElement.textContent = "";
  });
});
