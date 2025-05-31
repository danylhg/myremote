const usuarios = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Pérez",
        correo: "juan.perez@example.com",
        telefono: "123-456-7890",
        comentario: "Este es un comentario de ejemplo."
    },
    {
        id: 2,
        nombre: "María",
        apellido: "González",
        correo: "maria.gonzalez@example.com",
        telefono: "987-654-3210",
        comentario: "Otro comentario de ejemplo."
    },
    {
        id: 3,
        nombre: "Carlos",
        apellido: "Ramírez",
        correo: "carlos.ramirez@example.com",
        telefono: "555-123-4567",
        comentario: "Un comentario adicional."
    },
    {
        id: 4,
        nombre: "Ana",
        apellido: "López",
        correo: "ana.lopez@example.com",
        telefono: "222-333-4444",
        comentario: "Este es un comentario más."
    },
    {
        id: 5,
        nombre: "Luis",
        apellido: "Martínez",
        correo: "luis.martinez@example.com",
        telefono: "888-777-6666",
        comentario: "Comentario genérico."
    },
    {
        id: 6,
        nombre: "Elena",
        apellido: "Hernández",
        correo: "elena.hernandez@example.com",
        telefono: "444-555-6666",
        comentario: "Otro comentario genérico."
    },
    {
        id: 7,
        nombre: "Miguel",
        apellido: "Sánchez",
        correo: "miguel.sanchez@example.com",
        telefono: "999-888-7777",
        comentario: "Un comentario interesante."
    },
    {
        id: 8,
        nombre: "Sofía",
        apellido: "Díaz",
        correo: "sofia.diaz@example.com",
        telefono: "333-222-1111",
        comentario: "Un comentario adicional más."
    },
    {
        id: 9,
        nombre: "Fernando",
        apellido: "Ortiz",
        correo: "fernando.ortiz@example.com",
        telefono: "777-555-3333",
        comentario: "Comentario adicional interesante."
    },
    {
        id: 10,
        nombre: "Gabriela",
        apellido: "Cruz",
        correo: "gabriela.cruz@example.com",
        telefono: "111-222-3333",
        comentario: "Último comentario de ejemplo."
    }
];

tabla = document.querySelector('#tabla');

function crearTabla() {
    var cadena="<table><thead>";
    cadena=cadena+"<tr><th>ID</th>";
    cadena=cadena+"<th>Nombre</th>";
    cadena=cadena+"<th>Apellidos</th>";
    cadena=cadena+"<th>Correo</th>";
    cadena=cadena+"<th>Telefono</th>";
    cadena=cadena+"<th>Comentario</th></tr></thead>";
    cadena=cadena+"<tbody>";

    for(const usuario of usuarios){
        cadena=cadena+"<tr>";
        cadena=cadena+"<td>" + usuario.id + "</td>";
        cadena=cadena+"<td>" + usuario.nombre + "</td>";
        cadena=cadena+"<td>" + usuario.apellido + "</td>";
        cadena=cadena+"<td>" + usuario.correo + "</td>";
        cadena=cadena+"<td>" + usuario.telefono + "</td>";
        cadena=cadena+"<td>" + usuario.comentario + "</td>";
    }
 
    cadena=cadena+"</tbody>";
    cadena=cadena+"</tabe>";
    tabla.innerHTML = cadena;

}

crearTabla();
fila = document.querySelector('#fila');

function agregarFila(){
    const id=document.getElementById("id").value;
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const correo=document.getElementById("correo").value;
    const telefono=document.getElementById("telefono").value;
    const comentario=document.getElementById("comentario").value;

    if(id && nombre && apellido && correo && telefono && comentario){
       let contenedor=document.querySelector('#tabla').getElementsByTagName('tbody')[0];
       const nuevaFila=contenedor.insertRow();

       nuevaFila.innerHTML=`
           <td>${id}</td>
           <td>${nombre}</td>
           <td>${apellido}</td>
           <td>${correo}</td>
           <td>${telefono}</td>
           <td>${comentario}</td>
       `;
       document.getElementById('formulario').reset();
    }
    else{
        alert("Los datos no estan completos");
    }
}

