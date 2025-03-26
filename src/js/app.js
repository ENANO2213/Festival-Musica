//Espera a que todo el HTML y CSS sea cargado para la ejecución de la función
document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
});
//Función para crear la galeria
function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");
  const CANTIDAD_IMG = 16; //Contante de número de imagenes
  //Ciclo for que agrega las imagenes hasta tener 16
  for (let i = 0; i <= CANTIDAD_IMG; i++) {
    const imagen = document.createElement("IMG"); //Creación de la etiqueta
    imagen.src = `src/img/gallery/full/${i}.jpg`; //Ruta de las imagenes
    imagen.alt = "Imagen Galeria"; //Texto alterno
    galeria.appendChild(imagen); //Agregando las imagenes a la lista de elementos
  }
}
