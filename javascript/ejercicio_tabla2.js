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

const tabla = document.querySelector('#tabla');

function mostrarModal() {
    document.getElementById("contenedor-formulario").style.display = 'flex';
}

function cerrarFormulario() {
    document.getElementById("contenedor-formulario").style.display = 'none';
}

function crearTabla() {
    let cadena = "<table><thead>";
    cadena += "<tr><th>ID</th>";
    cadena += "<th>Nombre</th>";
    cadena += "<th>Apellidos</th>";
    cadena += "<th>Correo</th>";
    cadena += "<th>Telefono</th>";
    cadena += "<th>Comentario</th>";
    cadena += "<th>Acciones</th></tr></thead><tbody>";

    for (const usuario of usuarios) {
        cadena += "<tr>";
        cadena += "<td>" + usuario.id + "</td>";
        cadena += "<td>" + usuario.nombre + "</td>";
        cadena += "<td>" + usuario.apellido + "</td>";
        cadena += "<td>" + usuario.correo + "</td>";
        cadena += "<td>" + usuario.telefono + "</td>";
        cadena += "<td>" + usuario.comentario + "</td>";
        cadena += "<td><i class='bi bi-trash3' style='cursor:pointer; color:black;' onclick='animarYEliminar(this)'></i></td>";
        cadena += "</tr>";
    }

    cadena += "</tbody></table>";
    tabla.innerHTML = cadena;
}

function animarYEliminar(icono) {
    icono.classList.add("animar-basura");

    setTimeout(() => {
        const fila = icono.closest('tr');
        fila.remove();
    }, 400); // tiempo de la animación antes de eliminar
}

function agregarFila() {
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const comentario = document.getElementById("comentario").value;

    if (id && nombre && apellido && correo && telefono && comentario) {
        let contenedor = document.querySelector('#tabla').getElementsByTagName('tbody')[0];
        const nuevaFila = contenedor.insertRow();

        nuevaFila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${correo}</td>
            <td>${telefono}</td>
            <td>${comentario}</td>
            <td><i class="bi bi-trash3" style="cursor:pointer; color:black;" onclick="animarYEliminar(this)"></i></td>
        `;

        document.getElementById('formulario').reset();
        cerrarFormulario();
    } else {
        alert("Los datos no están completos");
    }
}

crearTabla();


