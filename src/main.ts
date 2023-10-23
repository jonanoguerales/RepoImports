import { dameCarta, plantarme, recargarPagina, saber } from "./motor";
import "./style.css";
import { mostrarPuntuacion } from "./ui";

function eventos() {
  const botonAñadir = document.querySelector(".añadir");
  if (
    botonAñadir !== null &&
    botonAñadir !== undefined &&
    botonAñadir instanceof HTMLButtonElement
  ) {
    botonAñadir.addEventListener("click", dameCarta);
  } else {
    console.error("No se encontro el elemento añadir");
  }

  const botonPlantarse = document.querySelector(".plantarse");
  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.addEventListener("click", plantarme);
  } else {
    console.error("No se encontro el elemento plantarse");
  }

  const botonNueva = document.querySelector(".nueva");
  if (
    botonNueva !== null &&
    botonNueva !== undefined &&
    botonNueva instanceof HTMLButtonElement
  ) {
    botonNueva.addEventListener("click", recargarPagina);
  } else {
    console.error("No se encontro el elemento nuevo");
  }

  const botonSaber = document.querySelector(".saber");
  if (
    botonSaber !== null &&
    botonSaber !== undefined &&
    botonSaber instanceof HTMLButtonElement
  ) {
    botonSaber.addEventListener("click", saber);
  } else {
    console.error("No se encontro el elemento saber");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  mostrarPuntuacion();
  recargarPagina();
});
