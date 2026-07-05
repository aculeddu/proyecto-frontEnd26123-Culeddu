import { comprar } from "./carrito.js";

//FUNCIONES
const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedorTarjetas");
    fetch("../data/productos.json").then((response) => response.json()).then((data) =>
        data.forEach((producto) => {

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
    }),
    ).catch((error) => console.log(error));
};

renderizarProductos();
