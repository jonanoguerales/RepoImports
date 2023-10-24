import { puntuacion, setPuntuaciones } from "./model";
import {
  calcularNumeroAleatorio,
  calcularNumeroCarta,
  calcularPuntuacionReal,
  mostrarCarta,
} from "./motor";

const mensajes = (msj: string) => {
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
const pintarCarta = (url: string) => {
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
const mensajesPuntuaciones = () => {
  deshabilitar(true);
  ocultar("block");
  if (puntuacion > 4) {
    if (puntuacion === 7.5) {
      mensajes("¡ Lo has clavado! ¡Enhorabuena!");
    } else if (puntuacion === 5 || puntuacion === 5.5) {
      mensajes("Te ha entrado el canguelo eh?");
    } else if (puntuacion === 6 || puntuacion === 7) {
      mensajes("Casi casi...");
    } else {
      mensajes("Game Over");
    }
  } else {
    mensajes("Has sido muy conservador");
  }
};

export const dameCarta = () => {
  const numeroAleatorio = calcularNumeroAleatorio();

  const puntuacionReal = calcularPuntuacionReal(numeroAleatorio, puntuacion);

  setPuntuaciones(puntuacionReal);

  // 8 aleatorio ---> carta 10
  const numeroCarta = calcularNumeroCarta(numeroAleatorio);

  const urlImagen = mostrarCarta(numeroCarta); //string con el src

  if (puntuacion < 8) {
    if (urlImagen !== undefined) {
      pintarCarta(urlImagen);
    } else {
      console.log("urlImagen es undefined");
    }
    pintarPuntuacion();
  } else {
    deshabilitar(true);
    pintarPuntuacion();
    deshabilitarPlantarse(true);
  }
};

export const plantarme = () => {
  mensajesPuntuaciones();
  nuevaPartida("block");
};

function pintarPuntuacion() {
  if (puntuacion > 7.5) {
    mensajes("Game Over");
    deshabilitar(true);
    ocultar("none");
    nuevaPartida("block");
  }
  mostrarPuntuacion();
}

export function saber() {
  deshabilitar(false);
  ocultar("none");
  mensajes("");
}

export function recargarPagina() {
  deshabilitar(false);
  ocultar("none");
  nuevaPartida("none");
  mensajes("");
  setPuntuaciones(0);
  mostrarPuntuacion();
  pintarCarta(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  deshabilitarPlantarse(false);
}

function nuevaPartida(smj: string) {
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

function deshabilitar(msj: boolean) {
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

function deshabilitarPlantarse(msj: boolean) {
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

function ocultar(msj: string) {
  const botonSaber = document.querySelector(".saber");
  if (
    botonSaber !== null &&
    botonSaber !== undefined &&
    botonSaber instanceof HTMLButtonElement
  ) {
    botonSaber.style.display = msj;
  } else {
    console.error("No se encontro el elemento saber");
  }
}
