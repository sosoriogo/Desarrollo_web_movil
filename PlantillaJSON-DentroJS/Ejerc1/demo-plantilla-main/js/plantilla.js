const datosproductos = [{
        nombre: "Escritorio",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab sit commodi aperiam incidunt libero quisquam, harum ut tenetur corporis, quas molestias in? Exercitationem, asperiores!",
        precio: "$ 12.345",
        cantidad: 245,
        foto: "https://images.unsplash.com/photo-1579532170056-9b32d6d16a59?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wyMzQ3ODQ4fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
        nombre: "Silla",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab sit commodi aperiam incidunt libero quisquam, harum ut tenetur corporis, quas molestias in? Exercitationem, asperiores!",
        precio: "$ 12.345",
        cantidad: 245,
        foto: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
        nombre: "Computador",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab sit commodi aperiam incidunt libero quisquam, harum ut tenetur corporis, quas molestias in? Exercitationem, asperiores!",
        precio: "$ 12.345",
        cantidad: 245,
        foto: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MjM0Nzg0OHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
        nombre: "Computador",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab sit commodi aperiam incidunt libero quisquam, harum ut tenetur corporis, quas molestias in? Exercitationem, asperiores!",
        precio: "$ 12.345",
        cantidad: 245,
        foto: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MjM0Nzg0OHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
];
// const f1 = "";
// const p1 = document.getElementById("app").innerHTML = `esto es un texto y una operacion ${3 + 5}`;
function plantilla(datosproductos) {
    return `<div class="ficha-producto">
    <img class="foto" src=${datosproductos.foto}><div><h2 class="nombre">${datosproductos.nombre}</h2><p class="precio">Precio: ${datosproductos.precio}</p>
    <p class="cantidad">Cantidad: ${datosproductos.cantidad}</p><p class="descripcion">${datosproductos.descripcion}</p>
    <button class="btn">Comprar</button>
    </div></div>`;
}
const p1 = (document.getElementById(
    "app"
).innerHTML = `<h1>Productos Disponibles(${
  datosproductos.length
}) </h1> ${datosproductos.map(plantilla).join("")} <p class="precio">Son ${
  datosproductos.length
}
    productos que se han actualizado recientemente en el catalogo.</p><p class="cantidad">Verifique las actualizaciones periodicamente!!!</p><br>`);