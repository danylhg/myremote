let progress=0;

const progressBar =document.getElementById("progressBar")

function doLogin(){
    alert("Acceso concedido");
}

function doProgress(){
    if(progress<100){
        progress+=10;
        progressBar.style.width=progress + "%";
        progressBar.textContent=progress + "%";
        setTimeout(doProgress, 1000);
    } 
    else{
        progressBar.textContent="!Proceso completo!";
        doLogin();
    }
}

doProgress();