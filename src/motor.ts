import { puntuacion, setPuntuaciones } from "./model";
import {
  deshabilitarPlantarse,
  deshabilitar,
  mensajes,
  mostrarPuntuacion,
  nuevaPartida,
  pintarCarta,
} from "./ui";

export const calcularNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;

export const calcularPuntuacionReal = (nAleatorio: number, pt: number) =>
  nAleatorio > 7 ? (pt += 0.5) : (pt += 1);

export const calcularNumeroCarta = (nAleatorio: number) =>
  nAleatorio > 7 ? (nAleatorio += 2) : nAleatorio;

export const mostrarCarta = (carta: number): string | undefined => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      mensajes("No se encontro el número");
      return undefined;
  }
};

export const puntuaciones = () => {
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
  puntuaciones();
  nuevaPartida("block");
};

export function pintarPuntuacion() {
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
