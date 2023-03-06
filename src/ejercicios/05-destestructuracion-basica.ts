//console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Another Girl',
    detalles: {
        autor: 'The killers',
        anio: 2015
    }
}

const autor = 'Fulano';
//Desestructuracion de objetos
//Desestructuracion es extraer directamente ciertas propiedades de un objeto para crear variables
const { volumen, segundo, cancion, detalles } = reproductor;
//const { volumen, segundo, cancion, detalles: {autor} } = reproductor;
const { autor:autorDetalle } = detalles;


// console.log('El volumen actual es de', volumen);
// console.log('El segundo actual es de', segundo);
// console.log('La cancion actual es de', cancion);
// console.log('El autor es', autorDetalle );

//Desestructuracion de Arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
//Desestructuracion de arreglos importa su posicion
const [ , , trunks] = dbz;

// console.log('Personaje 1 ', goku );
// console.log('Personaje 2 ', vegeta );
console.log('Personaje 3 ', trunks );