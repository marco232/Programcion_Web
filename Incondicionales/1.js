window.addEventListener("load",function() {
    class Telefono {
        constructor (marca){
            this.marca = marca;
        }
        anuncio () {
            return "Ha llegado el nuevo teléfono de "+this.marca;
        }
    }
    class Modelo extends Telefono {
        constructor (marca, modelo){
            super(marca);
            this.modelo = modelo;
        }
        anuncioCompleto(){
            return this.anuncio() + ": el modelo " + this.modelo;
        }
    }                 
    let miTelefono = new Modelo ("Google", "Pixel");  
    mensaje.innerHTML = miTelefono.anuncioCompleto();     
    
},true);