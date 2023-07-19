//first we added thelibrary to the folder
// npm install node-fetch

import fetch from "node-fetch";

//hace la consulta al servidor
const response = await fetch('https://api.escuelajs.co/api/v1/products');
//esperamos que se tenga una respuesta, para ya en ese momento organizar la info
const products = await response.json();

//ya no es necesario usar la palabra async

export {products};