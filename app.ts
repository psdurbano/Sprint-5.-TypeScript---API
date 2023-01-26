async function fetcher(url = "", headers = {}) {
  const response = await fetch(url, headers);
  const data = await response.json();
  //Select the element with id "joke-content"
  let jokeContent = document.querySelector("#joke-content");
  if (!jokeContent) {
    //Create a new element
    jokeContent = document.createElement("p");
    jokeContent.setAttribute("id", "joke-content");
    document.body.appendChild(jokeContent);
  }
  //Assign the value of joke to the text content of the element
  jokeContent.textContent = data.joke;
}

document.querySelector(".next-joke")?.addEventListener("click", () => {
  fetcher("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
});
