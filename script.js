var palabras = ["ALURA", "ORACLE", "PROGRAMACION", "AVENIDA", "MUEBLERIA", "ALMACEN", "REIR", "JABONCILLO", "FERRARI"];
var k = -1; //guardamos la posicion de la palbra en el vector
var palabra = ""; //palabra con la que trabajaremos
var tamanio_palabra = 0; //almacena el tamaño de palabra y para cada letra correcta -1 hasta 0 que indica que gano
var palabra_armada = [];
var letras_ingresadas = "";
var n = 0; //valor desde las imagenes
var jugando = false;

function nuevo_juego()
{
    //Vaciar
    palabra_armada = [];
    letras_ingresadas = "";
    tamanio_palabra = 0;
    jugando = true;
    n = 0;
    let barras = "";
    let i = Math.round(Math.random() * (palabras.length-1));
    //console.log(palabras[palabras.length-1]);
    k = i;
    palabra = palabras[i];
    for(let j = 0; j < palabra.length; j++)
    {
        //columnas = columnas + "<th>" + "X" + "</th>";
        palabra_armada.push("<th></th>");
        barras = barras + "<th><img src='imagenes/barra.png' width='50px' alt='barra'></th>";
    }
    //console.log(palabra);
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
/*letras_ingresadas añadimos la (nueva-letra)*/
function probar_letra(letra)
{
    letra = letra.toUpperCase(); //para comparar mayusculas
    if(letras_ingresadas.indexOf(letra) == -1) //La letra no fue ingresada
    {
        let letra_reemplazar = "";
        letras_ingresadas += letra;
        sw = true;
        /*if(palabra.indexOf(letra) != -1) /*la letra se encuentra en la palabra*/
        for(let l = 0; l < palabra.length; l++)
        {
            if(letra == palabra[l])
            {
                //console.log("la letra "+letra+" esta en la palabra");
                letra_reemplazar = "<th>" + letra + "</th>";
                sw = false;
                palabra_armada[l] = letra_reemplazar;
                //para probar si ganamos
                tamanio_palabra += 1;
            }
        }
        if(sw)
        {
            n++;
            img_ahorcado(n);
            //console.log(n);
            if(n==9)
            {
                alert("Perdiste :(");
                nuevo_juego();
            }
        }
        mostrar_letras(palabra_armada);
        //console.log(letras_ingresadas);
    }
}


document.getElementById("juego-nuevo").onclick = (e) => {
    nuevo_juego();
}

//validamos la entrada
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
        let code = event.keyCode; //nos servira para validar la entrada
        //let codeValue = event.codeValue;
        if(validar(code) && jugando) //para no tener el error de probar si aun no comenzo el juego
        {
            //console.log("key Value: " + value)
            probar_letra(value);
            //probamos si ganamos
            if(tamanio_palabra == palabra.length)
            {
                alert("ganaste!!!");
                nuevo_juego();
            }
        }
        //console.log("key Value: " + value);
        //console.log("Key Code: " + Code);
        //console.log("codeValue: " + codeValue);
    }, false
)
//INICIAR JUEGO
document.getElementById("iniciar-juego").onclick = (i) => {
    document.querySelector(".inicio").style.display = 'none';
    document.querySelector(".juego-ahorcado").style.display = 'flex';
    //nuevo_juego();
}

//DESISTIR
function desistir()
{
    document.querySelector(".juego-ahorcado").style.display = 'none';
    document.querySelector(".inicio").style.display = 'flex';
    jugando = false;
}

document.getElementById("juego-desistir").onclick = (d) => {
    desistir();
}

//AGREGAR NUEVA PALABRA
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
    console.table(palabras);
}
document.getElementById("guardar-palabra").onclick = (g) => {
    let nuevo = document.querySelector(".nueva-palabra").value.toUpperCase();
    palabra_nueva(nuevo);
    nuevo_juego();
    document.querySelector(".ingresar-palabra").style.display = 'none';
    document.querySelector(".juego-ahorcado").style.display = 'flex';
}

