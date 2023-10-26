async function obtenerDatosClima() {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=aac2a7c53cfc0e597a1c95cfcd8adff5&units=metric&lang=es'); // Reemplaza 'URL_DE_TU_API' con la URL real de tu API
      if (!response.ok) {
        throw new Error(`Error al obtener datos del clima: ${response.status}`);
      }
      const data = await response.json();
  
      const nombreCiudadElement = document.getElementById('nombre-ciudad');
      const temperaturaElement = document.getElementById('temperatura');
      const humedadElement = document.getElementById('humedad');
      const descriptionElement = document.getElementById('clima');

  

      const name = data.name; // Obtiene el valor de "name"
      const temp = data.main.temp; // Obtiene el valor de "temp"
      const humidity = data.main.humidity; // aca la humedad
      const description = data.weather[0].description; // aca el cielo
  

      nombreCiudadElement.textContent = `Ciudad: ${name}`;
      temperaturaElement.textContent = `Temperatura: ${temp} °C`;
      humedadElement.textContent = `Humedad: ${humidity} %`;
      descriptionElement.textContent = `Clima: ${description}`;

    } catch (error) {
      console.error(error);
    }
  }
  

  obtenerDatosClima();
  