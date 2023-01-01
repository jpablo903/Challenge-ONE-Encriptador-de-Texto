function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    
    // var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textoEncriptado = texto.replace(/e/igm,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

    document.getElementById("imageRight").style.display = "none";
    document.getElementById("textoTituloMensaje").style.display = "none";
    document.getElementById("textoEncriptado").innerHTML = textoEncriptado;
    document.getElementById("copy").style.background = "#D8DFE8";
    document.getElementById("copy").innerHTML = "¿Copiar?";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"
} 

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textoEncriptado = texto.replace(/enter/igm,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/igm,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");

    document.getElementById("imageRight").style.display = "none";
    document.getElementById("textoTituloMensaje").style.display = "none";
    document.getElementById("textoEncriptado").innerHTML = textoEncriptado;
    document.getElementById("copy").style.background = "#D8DFE8";
    document.getElementById("copy").innerHTML = "¿Copiar?";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"
}

function copiar(){
    var textoEncriptadoC = document.querySelector("#textoEncriptado");
    textoEncriptadoC.select()
    document.execCommand("copy");
    // alert("COPIADO")
    document.getElementById("copy").style.background = "greenyellow";
    document.getElementById("copy").innerHTML = "Copiado!";

}