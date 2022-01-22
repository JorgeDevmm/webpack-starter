import "../css/componentes.css";
// importación de imagenes referenciandola
/* import webpacklogo from "../assets/img/webpack-logo.png"; */


// para usar la función fuera del archivo tenemos al usar el bundle tenemos que usar la palabra export

// al estar usando modulo podemos decirle a javascript que cosas utilizar es como si estuvieramos trabajando con propiedades privadas


export const saludar = ( nombre = "sin nombre" ) => {

    console.log("Creando etiqueta h1");

    const h1 = document.createElement("h1");

    h1.innerText = `Hola, ${ nombre}`;
    
    // hacer referencia al document body
    document.body.append( h1 );


    // Img
/*     console.log(webpacklogo);
    const img = document.createElement("img");
    img.src = webpacklogo;
    document.body.append( img );
 */

}