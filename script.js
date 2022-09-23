var palabras = ["ALURA", "ORACLE", "PROGRAMACION", "AVENIDA", "MUEBLERIA", "ALMACEN", "REIR", "JABONCILLO", "FERRARI"];
var k = -1;
var palabra = "";
var tamanio_palabra = 0;
var palabra_armada = [];
var letras_ingresadas = "";
var letras_erroneas = "";
var n = 0;
var jugando = false;

function nuevo_juego()
{
    palabra_armada = [];
    letras_ingresadas = "";
    letras_erroneas = "";
    mostrar_erroneas();
    tamanio_palabra = 0;
    jugando = true;
    n = 0;
    let barras = "";
    let i = Math.round(Math.random() * (palabras.length-1));
    k = i;
    palabra = palabras[i];
    for(let j = 0; j < palabra.length; j++)
    {
        palabra_armada.push("<th></th>");
        barras = barras + "<th><img src='imagenes/barra.png' width='50px' alt='barra'></th>";
    }
    mostrar_letras(palabra_armada);
    document.getElementById("munieco").innerHTML = "";
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
    document.getElementById("munieco").innerHTML = imagen;
}

function mostrar_erroneas()
{
    document.getElementById("oprimidas").innerHTML = letras_erroneas;
}

function probar_letra(letra)
{
    letra = letra.toUpperCase();
    if(letras_ingresadas.indexOf(letra) == -1) 
    {
        let letra_reemplazar = "";
        letras_ingresadas += letra;
        sw = true;
        for(let l = 0; l < palabra.length; l++)
        {
            if(letra == palabra[l])
            {
                letra_reemplazar = "<th>" + letra + "</th>";
                sw = false;
                palabra_armada[l] = letra_reemplazar;
                tamanio_palabra += 1;
            }
        }
        if(sw)
        {
            n++;
            img_ahorcado(n);
            letras_erroneas += letra + " ";
            if(n==9)
            {
                alert("Perdiste :(");
                nuevo_juego();
            }
        }
        mostrar_letras(palabra_armada);
        mostrar_erroneas();
    }
}

document.getElementById("juego-nuevo").onclick = (e) => {
    nuevo_juego();
}

function validar(codigo)
{
    if(codigo > 64 && codigo < 91)
    {
        return true;
    }
    if(codigo > 96 && codigo < 123)
    {
        return true;
    }
    return false;
}

document.addEventListener("keydown", (event) =>
    {
        let value = event.key;
        let code = event.keyCode;
        if(validar(code) && jugando)
        {
            probar_letra(value);
            if(tamanio_palabra == palabra.length)
            {
                alert("ganaste!!!");
                nuevo_juego();
            }
        }
    }, false
)

document.getElementById("iniciar-juego").onclick = (i) => {
    document.querySelector(".inicio").style.display = 'none';
    document.querySelector(".juego-ahorcado").style.display = 'flex';
}

function desistir()
{
    document.querySelector(".juego-ahorcado").style.display = 'none';
    document.querySelector(".inicio").style.display = 'flex';
    jugando = false;
}

document.getElementById("juego-desistir").onclick = (d) => {
    desistir();
}

document.getElementById("agregarpalabra").onclick = (a) => {
    document.querySelector(".inicio").style.display = 'none';
    document.querySelector(".ingresar-palabra").style.display = 'flex';
}

function palabra_nueva(nuevo)
{
    for (let m = 0; m < palabras.length; m++) {
        if(nuevo == palabras[m]){
            return true;
        }
    }
    palabras.push(nuevo);
}
document.getElementById("guardar-palabra").onclick = (g) => {
    let nuevo = document.querySelector(".nueva-palabra").value.toUpperCase();
    palabra_nueva(nuevo);
    nuevo_juego();
    document.querySelector(".ingresar-palabra").style.display = 'none';
    document.querySelector(".juego-ahorcado").style.display = 'flex';
}

