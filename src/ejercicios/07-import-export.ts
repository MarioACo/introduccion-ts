//console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
import { Producto, calculaISV  } from "./06-desestructuracion-funcion";


//Si tenemos alguna funcion ejecutaria el codigo e expecion de las interfaces
const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 200
    }
];

const [total, isv] = calculaISV( carritoCompras);

console.log('Total: ', total);
console.log('Isv:', isv)