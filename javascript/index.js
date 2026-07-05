import { comprar } from "./carrito.js";


//PRODUCTOS
const pulseraPerlas = {
    nombre: "Pulsera de perlas",
    precio: 10000,
    stock: 1,
    imagen: "https://www.decuencasaperlas.com/cdn/shop/products/pu14.jpg?v=1670332952"
}

const collarGamuza = {
    nombre: "Collar de Gamuza",
    precio: 30000,
    stock: 4,
    imagen: "https://acdn-us.mitiendanube.com/stores/357/850/products/foto-producto-ec-bbafc2550747b1b81217656527267657-480-0.webp"
}

const anilloColorido = {
    nombre: "Anillos coloridos",
    precio: 3000,
    stock: 13,
    imagen: "https://i.pinimg.com/1200x/3b/9b/b1/3b9bb107e0a05a80ba2a01fbb16bf65e.jpg"
}

const arosRojos = {
    nombre: "Aros rojos",
    precio: 7000,
    stock: 2,
    imagen: "https://i.pinimg.com/736x/d3/68/2c/d3682ceab3bde59f790e13d0c26d71e5.jpg"
}

const catalogo = [pulseraPerlas, collarGamuza, anilloColorido, arosRojos]

//FUNCIONES
const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedorTarjetas");
    catalogo.forEach((producto) => {

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
        boton.textContent = "Comprar";

        boton.addEventListener("click", () => {
            comprar(producto);
        });

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(img);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
    });
};

renderizarProductos();
