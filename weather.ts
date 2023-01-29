// API key para acceder a los datos del clima
const API_KEY = 'd27394a209dd480e940175908232901';

// URL de la API del clima
const WEATHER_API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;

// función para obtener el clima en una ciudad específica
async function getWeather(city: string) {
  // hacer una solicitud GET a la API del clima
  const response = await fetch(`${WEATHER_API_URL}${city}`);
  // esperar la respuesta de la API y parsearla a un objeto JSON
  const data = await response.json();
  // retornar los datos del clima
  return data;
}

// función para mostrar el clima en la pantalla
async function displayWeather(city: string) {
    // obtener los datos del clima en la ciudad especificada
    const weatherData = await getWeather(city);
    // obtener el elemento en el HTML donde se mostrará el clima
    const weatherContainer = document.querySelector('#weather-container');
    // Verificar si weatherContainer es null
    if (weatherContainer) {
      // crear un elemento HTML para mostrar los datos del clima
      const weatherElement = document.createElement('p');
      weatherElement.innerHTML = `El clima en ${city} es de ${weatherData.current.temp_c}°C`;
      // agregar el elemento al contenedor de clima
      weatherContainer.appendChild(weatherElement);
    } else {
      console.error('No se encontró el elemento con el ID weather-container');
    }
  }
  
  // ejemplo de uso de la función displayWeather
  displayWeather('Barcelona');
  
