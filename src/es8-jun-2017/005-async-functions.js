const fnAsync = () => {
    return new Promise((resolve,reject) => {
        // aqui el ejemplo tiene un if terniario
        (true)
            //? funciona como un if
            ? setTimeout(()=> resolve('Async - texto'),2000)
            // aqui entraria la logica del else :
            : reject(new Error('Errrrror!'));
    })
};

const otraFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello')
}

console.log( 'Before');
otraFn();
console.log( 'after');


//que pasa si quitamos las palabras reservadas
const fnAsync2 = () => {
    return new Promise((resolve,reject) => {
        // aqui el ejemplo tiene un if terniario
        (true)
            //? funciona como un if
            ? setTimeout(()=> resolve('Async - texto'),2000)
            // aqui entraria la logica del else :
            : reject(new Error('Errrrror!'));
    })
};

const otraFn2 =  () => {
    const something =  fnAsync2();
    console.log(something);
    console.log('Hello')
}

console.log( 'Before');
otraFn2();
console.log( 'after');