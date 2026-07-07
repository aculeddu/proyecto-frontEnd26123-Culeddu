import{
    guardarCarrito,
    obtenerCarrito,
} from "./storage.js"

let carrito = document.querySelector(".carrito");

const carritoStorage = obtenerCarrito();
carrito.textContent = carritoStorage.length;

export const quitar = (indice) => {
    const carritoStorage = obtenerCarrito();
    carritoStorage.splice(indice, 1);
    guardarCarrito(carritoStorage);
    carrito.textContent = carritoStorage.length;
    renderizarCompra();
}

const renderizarCompra = () => {
    const contenedor = document.getElementById("contenedorCompra");
    const carritoStorage = obtenerCarrito();
    contenedor.innerHTML = "";
    carritoStorage.forEach((producto) => {
        const indice = carritoStorage.findIndex(p => p.id === producto.id);
        const tarjeta = document.createElement("article");
        const titulo = document.createElement("h2");
        titulo.textContent = producto.nombre;
        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.classList.add("producto");
        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;
        const boton = document.createElement("button");
        boton.classList.add("letras");
        boton.textContent = "Quitar";
        boton.addEventListener("click", () => {
            quitar(indice);
        });
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(img);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);
        contenedor.appendChild(tarjeta);
    })  
}

renderizarCompra();