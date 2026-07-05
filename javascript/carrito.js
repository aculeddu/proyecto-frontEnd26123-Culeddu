import{
    guardarCarrito,
    obtenerCarrito,
    vaciarCarritoStorage,
} from "./storage.js"

let carrito = document.querySelector(".carrito");

const carritoStorage = obtenerCarrito();
carrito.textContent = carritoStorage.length;

export const comprar = (producto) => {
    const carritoStorage = obtenerCarrito();
    console.log(producto);
    
    carritoStorage.push(producto);
    guardarCarrito(carritoStorage);
    carrito.textContent = carritoStorage.length;
}

export const quitar = (indice) => {
    const carritoStorage = obtenerCarrito();
}

function verLista(){
    const carritoStorage = obtenerCarrito();

    carritoStorage.forEach((producto) => {
        console.log(producto);
    });
}