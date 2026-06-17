let carrito = document.querySelector(".carrito");
let listaProductos = [];

function comprar(producto){
    console.log(producto);
    carrito.textContent = parseInt(carrito.textContent) + 1;
    listaProductos.push(producto);
}

function verLista(){
    for (let i = 0; i < listaProductos.length; i++){
        console.log(listaProductos[i]);
    }
}