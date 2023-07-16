//old
try {
    hello();
} catch (error) {
    console.log(error);
}

//new
try {
    anotherFn();
} catch {
    //puedo personalizar el mensaje de error
    console.log('esto es un error personalizado');
}