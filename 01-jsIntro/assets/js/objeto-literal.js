let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['mark1', 'mark5', 'hulkbuster'],
    direccion: {
        zip: '10888, 90264',
        ubicacion: 'Malibu',
    },
    ultimaPelicula: 'Infinity war',
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['edad']);
console.log(personaje['coords'].lat);


console.log(personaje.trajes.length);
console.log(personaje['trajes'].length);

const x = 'vivo';
console.log(personaje[x]);


// Mas detalles
// borrar una propiedad
delete personaje.edad;

console.log(personaje);

// Crear una nueva propiedad
personaje.casado = true;

// convertir a Array
const entriesPares = Object.entries( personaje );
console.log(entriesPares);


// hacer que no se mute mi objeto
// modificar let por const


// bloqueo total de objeto
Object.freeze( personaje );

//personaje.dinero = 150; // no puedo hacer esto cuando el objeto esta bloqueado

//console.log(dinero);


const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );

console.log(propiedades);
console.log(valores);

