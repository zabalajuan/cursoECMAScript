// Funciones con promesas de algo que va a pasar hoy, mañana o nunca

const anotherFunction = () => {
    return new Promise((resolve, reject)=>{
        //if(true){
        if(false){
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
    .catch(err => console.log(err));