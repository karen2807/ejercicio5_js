/**Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript */

var al_cen =159;
var al_m = 1.59;
var kg = 65.57;
var al_mr = Math.ceil(al_m);
var kg_b = Math.floor(kg);
let max = Number.MAX_VALUE+1;
let max_js = Number.MAX_VALUE;

console.log('Altura en centimetros:>> ', parseInt(al_cen), 'cm');
console.log('Altura en metros flotante:>> ', parseFloat(al_m), 'm');
console.log('Altura en metros redondeada hacia arriba:>> ', al_mr, 'm');
console.log('Peso en kg flotante:>> ', parseFloat(kg), 'kg');
console.log('Peso en kg redondeada hacia abajo:>> ', kg_b, 'kg');
console.log('El valor que se puede obtener es:>> ', max === max_js);