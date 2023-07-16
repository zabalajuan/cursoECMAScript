//Es un tipo especial de funcion que retorna una serie de valores segun el
//algoritmo definido

function* iterate1(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate1(['Oscar', 'David', 'Ulises', 'Camilo']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);