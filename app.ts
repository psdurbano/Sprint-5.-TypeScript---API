interface Joke {
  joke: string;
  score: number;
  date: string;
}

let reportJokes: Joke[] = [];
let currentScore: number = 1;

async function fetcher(url = "", headers = {}): Promise<void> {
  // Obtener la respuesta de la URL especificada con los encabezados dados
  const response = await fetch(url, headers);
  // Convertir la respuesta en un objeto JSON
  const data = await response.json();

  // Seleccionar el elemento con id "joke-content"
  let jokeContent: HTMLElement | null = document.querySelector("#joke-content");

  // Si no existe el elemento, crear un nuevo elemento "p" con el id "joke-content"
  if (!jokeContent) {
    jokeContent = document.createElement("p");
    jokeContent.setAttribute("id", "joke-content");
    document.body.appendChild(jokeContent);
  }

  // Asignar el valor de "data.joke" al contenido de texto del elemento seleccionado o creado
  jokeContent.textContent = data.joke;

  // Mostrar los botones de votación
  let voteButtons: HTMLElement | null = document.querySelector("#vote-buttons");
  if (voteButtons) {
    voteButtons.style.display = "block";
  }

  // Agregar eventos "click" a los botones de votación
  document.querySelector("#vote-1")?.addEventListener("click", () => {
    // Asignar el valor de la puntuación actual al valor 1
    currentScore = 1;
    // Actualizar la puntuación en el array reportJokes
    updateReportJokes(data.joke, currentScore);
  });
  document.querySelector("#vote-2")?.addEventListener("click", () => {
    // Asignar el valor de la puntuación actual al valor 2
    currentScore = 2;
    // Actualizar la puntuación en el array reportJokes
    updateReportJokes(data.joke, currentScore);
  });
  document.querySelector("#vote-3")?.addEventListener("click", () => {
    // Asignar el valor de la puntuación actual al valor 3
    currentScore = 3;
    // Actualizar la puntuación en el array reportJokes
    updateReportJokes(data.joke, currentScore);
  });

  function updateReportJokes(joke: string, score: number) {
    let jokeExists = false;
    // Recorrer el array reportJokes
    reportJokes.forEach((j: Joke) => {
      // Si la broma ya existe en el array reportJokes, actualizar su puntuación
      if (j.joke === joke) {
        j.score = score;
        jokeExists = true;
      }
    });
    // Si la broma no existe en el array reportJokes, agregar una nueva entrada
    if (!jokeExists) {
      reportJokes.push({ joke, score, date: new Date().toLocaleString() });
    }
    console.log(reportJokes);
  }
}

// Agregar un evento "click" al elemento con la clase "next-joke" (si existe) que llama a la función fetcher
document.querySelector(".next-joke")?.addEventListener("click", () => {
  fetcher("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
});
