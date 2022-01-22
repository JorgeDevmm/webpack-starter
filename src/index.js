// patrón módulo es la encapsulación del código
// Function anonima
// si necesito llamar la función anonima despues de ser creada se almancena en parentesis y se llama con parentesis
// funciones anonimas autoinvocadas


// (function () {

//     // código javascript mas limpio
//     "use strict"

//     // const personajes = [ "Ana" ,"Mercy" , "Mei"]

//     // console.log(personajes);
// }) ();


// almacenar de dentro de patrón módulo o función anonima autoinvocable
// (() => {

// })();

import { saludar } from "./js/componentes.js";
import "./styles.css";
    
    const nombre = "Jorge";  
    
    
    saludar( nombre );




