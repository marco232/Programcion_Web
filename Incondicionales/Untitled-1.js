const array = [1, 5, NaN, 7];
console.log(array.findIndex(x => Number.isNaN(x))); 
console.log(array.findIndex(x => x > 5)); 

console.log(array.find(x => Number.isNaN(x))); 
console.log(array.find(x => x > 5)); 



const array2 = new Array(5).fill('x');
console.log(array2); //[x, x, x, x, x]
const array3 = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g');
array3.fill(null, 3, 5);
console.log(array3);


const array4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
array4.copyWithin(2, 5, 7);
console.log(array4);


console.log("ITERADORES");
const array5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(Object.keys(array5));
console.log(Object.values(array5));
console.log(Object.entries(array5));


console.log("METODOS ESTÁTICOS");
const pseudoarray = {length: 2, 0: 'x', 1: 'y'};

const arrayNuevo = Array.from(pseudoarray);
for (const elemento2 of arrayNuevo){
    console.log(elemento2); 
}

const array6 = Array.of('Manzana', 'Platano', 'Pera');
console.log(array6);

const array7 = ['Manzana', 'Plátano',,,, 'Pera']
console.log(array7[3]);