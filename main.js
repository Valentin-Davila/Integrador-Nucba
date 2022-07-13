// callback

const alerthola= (nombre) => {
    return alert(`Hola ${nombre}`);
};
// alerthola(`Valentin`)

const consolehola = (nombre) => {
    return console.log(`Hola${nombre}`);
};
// consolehola(` Valentin`);

const procesarentrada= (callback) => {
    const nombre = prompt(`Por favor ingresa tu nombre:`);
    callback(nombre);
};
//  procesarentrada (alerthola);