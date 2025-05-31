const express=require('express');
const cors=require('cors');
const app=express();
const port=3000;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//traernos la cadena de conexión de mongobd
const {MongoClient, ServerApiVersion} = require('mongodb');
const uri='mongodb+srv://200920043:lagas*250803@cluster0.hg3yl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//Creamos la conexión

const cliente=new MongoClient(uri, {
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErros:true,
    }
});



app.post('/insertar', async (req,res)=>{
    try{
        const {usuario,password} =req.body;
        await cliente.connect();
        const db=cliente.db('MiBaseDatos');
        const coleccion=db.collection("usuarios");
        const resultado= await coleccion.insertOne({usuario:usuario,password:password})
        res.send(`
            <script>
                alert("Documento Guardado Exitosamente");
                window.location.href="http://localhost:3000/home";
            </script>
        `);
    }finally{
        await cliente.close();
    }
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname+ '/home.html');
});

app.post('/consultar', async(req,res)=>{
    try{
        const {usuario}=req.body;
        await cliente.connect();
        const db=cliente.db('MiBaseDatos');
        const coleccion=db.collection("usuarios");
        const resultado= await coleccion.find({usuario:usuario}).toArray();
        console.log(resultado);
    }finally{
        await cliente.close();
    }
});

app.post('/actualizar', async(req,res)=>{
    try{

    }finally{
        await cliente.close();
    }
});

app.post('/eliminar', async(req,res)=>{
    try{

    }finally{
        await cliente.close();
    }
});

app.listen(port, () => {
    console.log(`Server attending at ${port}`);
});