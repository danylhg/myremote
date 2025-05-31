//promise
const datos=[
    {id:1, title:'Avengers', year:2008},
    {id:2, title:'Spiderman', year:2014},
    {id:3, title:'Batman', year:2022},

];

/*const datos = [

]

/*const getDatos= () => {
    console.log (datos);
}*/

const getDatos = () => {
   return new Promise(
   (resolve,reject) => {

    if(datos.length===0){
        reject(new Error("El arreglo esta vacio"));
    }
    else{
        setTimeout(()=>{
            resolve(datos);
           },3000);
        }
       
   });
}

//console.log(getDatos());

/*getDatos().then((resultado)=>{
    console.log(resultado);
}).catch((error) =>{console.log(error.message)}); */

//const resultado = await getDatos();

async function obtieneDatos() {
    try{
        const resultado = await getDatos();
        console.log(resultado);
    }catch(error){
        console.log(error.message);

    }
    
}

obtieneDatos();
console.log("Mensaje despues del resultado");



