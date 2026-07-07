import{
    guardarCarrito,
    obtenerCarrito,
} from "./storage.js"

let carrito = document.querySelector(".carrito");

const carritoStorage = obtenerCarrito();
carrito.textContent = carritoStorage.length;

export const comprar = (producto) => {
    const carritoStorage = obtenerCarrito();  
    carritoStorage.push(producto);
    guardarCarrito(carritoStorage);
    carrito.textContent = carritoStorage.length;
}