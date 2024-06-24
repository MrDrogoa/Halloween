const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    // agrega esta clase en el estilo para que pueda abrir show-menu{ top:0; }-> esto esta en css
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    // con el remove solo remueve la clase para que cuando haga click se pueda cerrar.
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
// Toda esta funcion es para remover el menu responsive cuando vayamos a una seccion
navLink.forEach((item) => item.addEventListener("click", linkAction)); // asi se llama a la funcion de arriba

// Swiper
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30, // espaciado entre ellos
  loop: true, // es un bucle infinito que cuando vamos pasando nunca deje de parar
  pagination: {
    el: ".swiper-pagination", // traemos la clase para ejecutar
    clickable: true, // con esto lo activamos los tres puntitos de abajo
  },
});

let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true, // se muestra en donde estamos ej: en el centro
  slidesPerView: "auto", // esto hace que los elementos que esten de izquierda a derecha se vea
  loop: "true",
  spaceBetween: 16,
});

// Scroll up
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 460) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
// Esta funcion es para mostrar y quitar nuestra flechita que nos manda hacia arriba
window.addEventListener("scroll", scrollUp);

// Sections Active
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
// Esta funcion es para que el puntito del menu me siga segun donde yo este, se hace con scroll y los click
window.addEventListener("scroll", scrollActive);

// Scroll reveal
const sr = ScrollReveal({
  origin: "top", // Se origina desde arriba tambien puede ser de todos los lados
  distance: "60px", // es como un padding que le decimos que venga
  duration: 2500, // duracion de la animacion 2.5 segundos en este caso
  delay: 400,
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`); // con esto llamamos la clase que queremos animar que debe ser el elemento que envuelva todo osea el padre
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });
