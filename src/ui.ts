import { puntuacion } from "./model";

export const mensajes = (msj: string) => {
  const errorM = document.querySelector(".error");
  if (
    errorM !== null &&
    errorM !== undefined &&
    errorM instanceof HTMLElement
  ) {
    errorM.textContent = msj;
  }
};
export const mostrarPuntuacion = () => {
  const mostrarPuntuacion = document.getElementById("contador");
  if (
    mostrarPuntuacion !== null &&
    mostrarPuntuacion !== undefined &&
    mostrarPuntuacion instanceof HTMLElement
  )
    mostrarPuntuacion.textContent = puntuacion.toString();
};
export const pintarCarta = (url: string) => {
  const cartaImg = document.querySelector(".imagen");
  if (
    cartaImg !== null &&
    cartaImg !== undefined &&
    cartaImg instanceof HTMLImageElement
  ) {
    cartaImg.src = url;
  } else {
    console.log("No se encontro la carta");
  }
};

export function nuevaPartida(smj: string) {
  const botonNueva = document.querySelector(".nueva");
  if (
    botonNueva !== null &&
    botonNueva !== undefined &&
    botonNueva instanceof HTMLButtonElement
  ) {
    botonNueva.style.display = smj;
  } else {
    console.error("No se encontro el elemento nuevo");
  }
}

export function deshabilitar(msj: boolean) {
  const botonAñadir = document.querySelector(".añadir");
  if (
    botonAñadir !== null &&
    botonAñadir !== undefined &&
    botonAñadir instanceof HTMLButtonElement
  ) {
    botonAñadir.disabled = msj;
  } else {
    console.error("No se encontro el elemento añadir");
  }
}

export function deshabilitarPlantarse(msj: boolean) {
  const botonPlantarse = document.querySelector(".plantarse");
  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.disabled = msj;
  } else {
    console.error("No se encontro el elemento deshabilitar");
  }
}
