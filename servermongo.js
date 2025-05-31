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

async function run() {
    try{
        await cliente.connect();
        await cliente.db("admin").command({ping:1});
        console.log("Conexion exitosa");
    }finally{
        await cliente.close();
    }
}

app.get('/',async (req,res)=>{
    await cliente.connect();
    const db=cliente.db("sample_mflix");
    const collection=db.collection("movies");
    const resultado= await collection.find({poster:{$ne:null}},{_id:0,title:1,poster:1,plot:1,}).toArray();
    res.json(resultado);
});



app.listen(port, async () => {
    console.log(`Server attending at ${port}`);
    await run();
});