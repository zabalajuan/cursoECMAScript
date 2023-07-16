function* getId() {
    // Tu código aquí 👈
    let lastid = 1;
    while(true){
        yield lastid++;
    }
}

const id = getId()
console.log(id.next().value);
//id.next().value
//console.log(id);
id.next().value
//console.log(id);
//id.next().value
console.log(id.next().value);