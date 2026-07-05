const KEY = "carrito";

export const guardarCarrito = (carrito) => {
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
  localStorage.removeItem(KEY);
};

/* Dejo esto código aca para ver qué hacer después
export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};
*/
