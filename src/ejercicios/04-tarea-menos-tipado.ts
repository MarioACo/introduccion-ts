//console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
interface Direccion{
    calle:string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion:Direccion;
    mostrarDireccion: () => string;
}

const superHeroe:SuperHeroe = {
    nombre: 'SpiderMan',
    edad: 30,
    //Para añadir un objeto anidado en interfaces tenemos que crear uno nuevo con los atributos creados
    direccion: {
        calle: 'MainST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais; 
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);
