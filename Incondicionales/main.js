let edad = 16;
let trago = '';


const cat1A = 2500; 
const cat1B = 2350;
const cat2A = 2000; 
const cat2B = 1850; 
const cat3A = 1500; 
const cat3B = 1250;

const generaCuota = (genero, edad) => {
    

    genero = document.getElementById('genero').value;
    edad = document.getElementById('edad').value;
    let msj = '';
    let precio = 0;

    if(edad === ''){
        msj = 'Necesitamos su EDAD para generar una CUOTA';
    }

    else if(edad < 16){
        msj = 'Todavia no puede comprar seguro de auto';
    }
     
    
    else if((edad < 26) && (genero === 'hombre')){
        msj ='El precio de su poliza es: ';
        precio = cat1A;
    }else if((edad < 26) && (genero === 'mujer')){
        msj ='El precio de su poliza es: ';
        precio = cat1B;
    
    } else if((edad < 40) && (genero === 'hombre')){
        msj ='El precio de su poliza es: ';
        precio = cat2A;
    } else if((edad < 40) && (genero === 'mujer')){
        msj ='El precio de su poliza es: ';
        precio = cat2B;
    }
 

     else if(edad >=40 && edad <=85 && genero === 'hombre'){
         msj = 'El precio de su poliza es: ';
         precio = cat3A;
     }else if(edad >=40 && edad <=85 && genero === 'mujer'){
        msj = 'El precio de su poliza es: ';
        precio = cat3B;
    } 
  
    else {
        msj = 'Lo sentimos no tenemos poliza disponible';
    }
   

    const cuota = document.getElementById('cuota');

   
    if(precio !== 0){
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
            <span>${precio}</span>
        </div>
        `;
    } 

    else {
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
        </div>
        `;
    }

}