async function* funcionAsyncronaGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const otra = funcionAsyncronaGenerator();
otra.next().then(respuesta => console.log(respuesta.value));
otra.next().then(respuesta => console.log(respuesta.value));
otra.next().then(respuesta => console.log(respuesta.value));
otra.next().then(respuesta => console.log(respuesta.value));
console.log('Hello!')


//ejemplo 2

async function arrayOfNames (array){
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Oscar', 'Carlos', 'Sara', 'Margarita']);
console.log( 'after')