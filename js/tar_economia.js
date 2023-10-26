// Obtener el contenedor donde se mostrarán las tarjetas de noticias.
const contenedorNoticias = document.getElementById("contenedor-noticias");

// Array de URLs de archivos HTML de noticias.
const noticiasUrls = [
    "../content/noticia_7.html",
    "../content/noticia_8.html",
    "../content/noticia_12.html",
    "../content/noticia_13.html",
    "../content/noticia_14.html",
    "../content/noticia_15.html",







];

// Función para cargar y mostrar las tarjetas de noticias.
function cargarNoticias() {
    noticiasUrls.forEach(url => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");

                const titulo = doc.querySelector("h1").textContent;
                const imagenSrc = doc.querySelector("article img").getAttribute("src");

                const tarjeta = document.createElement("div");
                tarjeta.className = "tarjeta-noticia";

                // Crear un enlace <a> que rodea la imagen y el título
                const enlace = document.createElement("a");
                enlace.href = url;

                // Crear la imagen
                const imagen = document.createElement("img");
                imagen.src = imagenSrc;
                imagen.alt = titulo;

                // Crear el título
                const tituloElement = document.createElement("h3");
                tituloElement.textContent = titulo;

                // Agregar la imagen y el título al enlace
                enlace.appendChild(imagen);
                enlace.appendChild(tituloElement);

                // Agregar el enlace (que contiene la imagen y el título) a la tarjeta
                tarjeta.appendChild(enlace);

                contenedorNoticias.appendChild(tarjeta);
            });
    });
}

// Carga las noticias al cargar la página.
cargarNoticias();
