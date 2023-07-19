class User5 {
    //constructor
    constructor(name, age){
        console.log('Nuevo usuario 5');
        this.name = name;
        this.age = age;
    }
    //methods
    /* speak(){
        return 'Hello!!!';
    } */
    //agregando el # se vuelve un metodo privado
    #speak(){
        return 'Hello!!!';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper = new User5 ('Pedro', 25);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);
// console.log(bebeloper.uAge(27)); // no funciona porque uAGe no es una funcion