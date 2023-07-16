//lleva las {} porque no fue exportada como default
import {getData} from "./011-api.js";
function solution() {
    // Tu código aquí 👈
    return getData().then(movies => movies);
    //return await getData().then(movies => movies);
    
}
//const listaPeliculas = solution();
//console.log('intermedio')
//console.log(listaPeliculas);
solution();