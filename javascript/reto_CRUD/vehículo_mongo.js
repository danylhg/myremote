const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB Atlas
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://200920043:lagas*250803@cluster0.hg3yl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const cliente = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Insertar vehículo
app.post('/insertar', async (req, res) => {
    try {
        const { id, marca, modelo, placa, color, año } = req.body;
        await cliente.connect();
        const db = cliente.db('MiBaseDatos');
        const coleccion = db.collection("vehiculos");

        await coleccion.insertOne({ id, marca, modelo, placa, color, año: parseInt(año) });
        res.send(`
            <script>
                alert("Vehículo guardado exitosamente");
                window.location.href = "http://localhost:3000/home";
            </script>
        `);
    } finally {
        await cliente.close();
    }
});

// Consultar vehículo por ID
app.post('/consultar', async (req, res) => {
    try {
        const { id } = req.body;
        await cliente.connect();
        const db = cliente.db('MiBaseDatos');
        const coleccion = db.collection("vehiculos");

        const resultado = await coleccion.findOne({ id });
        res.json(resultado || { mensaje: "No encontrado" });
    } finally {
        await cliente.close();
    }
});

// Actualizar vehículo
app.post('/actualizar', async (req, res) => {
    try {
        const { id, marca, modelo, placa, color, año } = req.body;
        await cliente.connect();
        const db = cliente.db('MiBaseDatos');
        const coleccion = db.collection("vehiculos");

        await coleccion.updateOne({ id }, { $set: { marca, modelo, placa, color, año: parseInt(año) } });
        res.send("Vehículo actualizado");
    } finally {
        await cliente.close();
    }
});

// Eliminar vehículo
app.post('/eliminar', async (req, res) => {
    try {
        const { id } = req.body;
        await cliente.connect();
        const db = cliente.db('MiBaseDatos');
        const coleccion = db.collection("vehiculos");

        await coleccion.deleteOne({ id });
        res.send("Vehículo eliminado");
    } finally {
        await cliente.close();
    }
});

// Página principal
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
