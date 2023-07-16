// Funciones con promesas de algo que va a pasar hoy, mañana o nunca

const anotherFunction = () => {
    return new Promise((resolve, reject)=>{
        //if(true){
        if(true){
            resolve('Hey!!');
        } else {
            reject('Whooops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    //.then
    //.then
    .catch(err => console.log(err))
    .finally(()=> console.log('Promise end'));