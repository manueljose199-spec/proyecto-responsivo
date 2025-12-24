const botonTema = document.getElementById("boton-tema");
const body = document.body;
const iconoTema = document.querySelector(".icono-tema");

botonTema.addEventListener("click", () => {
  body.classList.toggle("light");
  iconoTema.textContent = body.classList.contains("light") ? "☀️" : "🌙";
  bannerCookies.classList.add("mostrar");
});

const bannerCookies = document.getElementById("bannerCookies");
const aceptarCookies = document.getElementById("aceptarCookies");

window.addEventListener("load", () => {
  setTimeout(() => {
    bannerCookies.classList.add("mostrar");
  }, 1000);
});

aceptarCookies.addEventListener("click", () => {
  bannerCookies.classList.remove("mostrar");
});
