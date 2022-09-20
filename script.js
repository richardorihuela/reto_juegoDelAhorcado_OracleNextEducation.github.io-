

var palabras = ["ALURA", "ORACLE", "PROGRAMACION", "AVENIDA", "MUEBLERIA"];
var k = -1; //guardamos la posicion de la palbra en el vector
var palabra = ""; //palabra con la que trabajaremos
var tamanio_palabra = ""; //almacena el tamaño de palabra y para cada letra correcta -1 hasta 0 que indica que gano
var palabra_armada = [];
var letras_ingresadas = "";
function nuevo_juego()
{
    //Vaciar
    palabra_armada = [];
    let barras = "";
    
    let i = Math.round(Math.random() * 3);
    k = i;
    palabra = palabras[i];
    for(let j = 0; j < palabra.length; j++)
    {
        //columnas = columnas + "<th>" + "X" + "</th>";
        palabra_armada.push("<th></th>");
        barras = barras + "<th><img src='imagenes/barra.png' width='50px' alt='barra'></th>";
    }
    console.log(palabra);
    /*mostrar_letras(palabra_armada)*/
    document.getElementById("barras-adivinar").innerHTML = barras;

    
}

function mostrar_letras(palabra_0)
{
    let nueva_palabra = "";
    for(let z = 0; z < palabra_0.length; z++)
    {
        nueva_palabra = nueva_palabra + palabra_0[z];
    }
    document.getElementById("palabra-adivinar").innerHTML = nueva_palabra;
}

function img_ahorcado(n)
{
    imagen = "<img src = 'imagenes/H_"+n+".png' width='250px'>";
    document.getElementById("munieco").innerHTML = imagen
}
/*letras_ingresadas añadimos la (nueva-letra)*/
function probar_letra(letra)
{
    if(letras_ingresadas.indexOf(letra) == -1) //La letra no fue ingresada
    {
        letra = letra.toUpperCase();
        let letra_reemplazar = "";
        letras_ingresadas += letra;
        /*if(palabra.indexOf(letra) != -1) /*la letra se encuentra en la palabra*/
        for(let l = 0; l < palabra.length; l++)
        {
            if(letra == palabra[l])
            {
                console.log("la letra "+letra+" esta en la palabra");
                letra_reemplazar = "<th>" + letra + "</th>";
                
                palabra_armada[l] = letra_reemplazar;
            }
            /*else
            {
                img_ahorcado(5)
            }*/
        }
        mostrar_letras(palabra_armada);
        console.log(letras_ingresadas);
    }
}


document.getElementById("juego-nuevo").onclick = (e) => {
    nuevo_juego();
    img_ahorcado(2);
}

