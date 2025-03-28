//Espera a que todo el HTML y CSS sea cargado para la ejecución de la función
document.addEventListener("DOMContentLoaded", function () {
  //Llamado a función de Navegación fija
  navFija();
  crearGaleria();
  resaltarMenu();
  scrollNav();
});
//Función para la navegación fija (solo en dispositivos desktop en adelante)
function navFija() {
  const header = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");
  document.addEventListener("scroll", function () {
    if (sobreFestival.getBoundingClientRect().bottom < 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}
//Función para crear la galeria
function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");
  const CANTIDAD_IMG = 16; //Contante de número de imagenes
  //Ciclo for que agrega las imagenes hasta tener 16
  for (let i = 1; i <= CANTIDAD_IMG; i++) {
    const imagen = document.createElement("IMG"); //Creación de la etiqueta
    imagen.src = `src/img/gallery/full/${i}.jpg`; //Ruta de las imagenes
    imagen.alt = "Imagen Galeria"; //Texto alterno
    //Event Handler
    imagen.onclick = function () {
      mostrarImagen(i);
    };
    galeria.appendChild(imagen); //Agregando las imagenes a la lista de elementos
  }
}

//Fucinón que mostrará la Imagen al dar click
function mostrarImagen(i) {
  const imagen = document.createElement("IMG"); //Creación de la etiqueta
  imagen.src = `src/img/gallery/full/${i}.jpg`; //Ruta de las imagenes
  imagen.alt = "Imagen Galeria"; //Texto alterno
  //Generar Modal
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;
  //Botón para cierre de Modal
  const cerrarbtn = document.createElement("BUTTON");
  cerrarbtn.textContent = "X";
  cerrarbtn.classList.add("btn-cerrar");
  cerrarbtn.onclick = cerrarModal;
  modal.appendChild(imagen);
  modal.appendChild(cerrarbtn);
  //Agregar a HTML
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

//Función para cerrar el Modal
function cerrarModal() {
  const modal = document.querySelector(".modal");
  if (!modal) return; //Se verifica si existe o no el modal, si existe lo muestra, sino no

  modal.classList.add("fade-out");

  setTimeout(() => {
    modal.remove();
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 490);
}

//Función para reasaltar el menú de acuerdo a ubicación en la vista
function resaltarMenu() {
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".navegacion-principal a");

    let actual = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        actual = section.id;
      }
    });
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + actual) {
        link.classList.add("active");
      }
    });
  });
}

//Función para agregar un efecto a la navegación
function scrollNav() {
  const navLinks = document.querySelectorAll(".navegacion-principal a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionScroll = e.target.getAttribute("href");
      const section = document.querySelector(sectionScroll);

      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}
