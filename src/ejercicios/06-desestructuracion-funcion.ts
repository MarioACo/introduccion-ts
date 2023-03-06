//console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

//Desestructuracion de argumentos
export interface Producto {
    desc : string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsung',
    precio: 1250
}

const tableta: Producto = {
    desc: 'Ipad Air',
    precio: 1703
}


export function calculaISV( productos: Producto[]):[number, number] {
    let total:number = 0;

    productos.forEach( ( { precio }  ) => {
        total += precio;
       
    } )

    return [total, total * 0.15];
}

const articulos = [ telefono, tableta];

const [ total, isv] = calculaISV( articulos );

console.log('Total: ' , total);
console.log('ISV: ' , isv);