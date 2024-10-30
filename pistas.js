class Pistas {

    constructor(nombre, duracion) {
        this.nombre = nombre;
        this.duracion = duracion;
    }


    static pedirNombrePista() {
        return this.#validarString('Ingrese el nombre de la pista');
    }

    static pedirDuracion() {
        return this.#validarDuracion('Ingrese la duración de la pista (en segundos)');
    }


    static #validarString(mensaje = "") {

        let foo;
        let datoValido = true;
    
        do {
            foo = prompt(mensaje);
    
            if(foo === null) {
                alert('Por favor no cancele');
                datoValido = false;
            }
            else if (foo.trim() === "") {
                alert('Por favor no de aceptar');
                datoValido = false;
            } 
    
            else {
                datoValido = true;
            }
            
        } while(!datoValido);
    
        return foo;
    
    }


    static #validarDuracion(mensaje = "") {

        let foo;
        let datoValido = true;
    
        do {
    
            foo = parseInt(prompt(mensaje));
    
            if (foo < 0) {
                alert('La duración de la pista no puede ser menor que 0');
                datoValido = false;
            }
            else if (foo >= 7200) {
                alert('La duración de la pista no puede ser mayor que 7200 segundos');
                datoValido = false;
            } 
            else if(isNaN(foo)) {
                alert('No ingrese texto');
                datoValido = false;
            }
            
            else {
                datoValido = true;
            }
    
        } while (!datoValido);
    
        return foo;

}

    static convertirSegundos(segundos) {

        const minutos = Math.floor(segundos / 60);
        const seg = segundos % 60;

        let minutosModificados = minutos;
        let segundosModificados = seg;

        if (minutos < 10) {
            minutosModificados = '0' + minutos;
        }
        
        if (seg < 10) {
            segundosModificados = '0' + seg;
        }

        return `${minutosModificados}:${segundosModificados}`;
    }
}