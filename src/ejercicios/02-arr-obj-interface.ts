//console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

//Arreglos Coleccion de elementos que tienen un tipo en comun
let habilidades: string[] = ['Bash','Counter','Healing'];

//Interfaces una serie de llaves para asegurarnos que un objeto luzca como queramos
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    //Para indicar que algo es opcional en ts se usa ?
    puebloNatal?: string;
}

//Objeto


const personaje: Personaje = {
    nombre: 'Mario',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);