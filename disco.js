class Disco {

    constructor(nombre, autor, portada, codigo) {
        this.nombre = nombre;
        this.autor = autor;
        this.portada = portada;
        this.codigo = codigo;
        this.pistas = [];
        this.totalPistas = 0;
    }

    static pedirNombre() {
        return this.#validarString('Ingrese el nombre del disco');
    }

    static pedirAutor() {
        return this.#validarString('Ingrese el autor del disco');
    }

    static pedirCodigo() {
        return this.#validarCodigo('Ingrese el codigo numerico del disco');
    }

    static pedirPortada() {
        return this.#validarString('Ingrese la portada del disco');
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



    static #validarCodigo() {

        let foo;
        let datoValido = true;
    
        do {
    
            foo = parseInt(prompt('Ingrese el código numérico único del disco'));
    
            if (foo < 1) {
                alert('El código numérico único del disco no puede ser menor que 1');
                datoValido = false;
            }
            else if (foo > 999) {
                alert('El código numérico único del disco no puede ser mayor que 999');
                datoValido = false;
            }
            else if (isNaN(foo)) {
                alert('Ingrese un código numérico, no texto');
                datoValido = false;
            }
            else {
                datoValido = true;
            }
    
        } while (!datoValido);
    
        return foo;
    }


    cargarPistas() {

        this.totalPistas = 0;

        do {

            let nombre = Pistas.pedirNombrePista();
            let duracion = Pistas.pedirDuracion();

            let pista = new Pistas(nombre, duracion);
            this.pistas.push(pista);

            this.totalPistas++;

        } while(confirm('¿Quiere agregar otra pista?'));
    } 


    mostrarHTML() {
        let html = "";

        html += `<div class="disco-1">`;
        html += `<div class="nombre-disco"><h1>${this.nombre}</h1></div>`;
        html += `<div class="autor"><h2>${this.autor}</h2></div>`;
        html += `<div class="info-disco">`;
        html += `<div class="portada-disco">`;
        html += `<img src="${this.portada}">`;
        html += `<div class="txt-informacion">`;
        html += `<p>Código numérico: ${this.codigo}</p>`;
        html += `<p>Cantidad de pistas: ${this.totalPistas}</p>`
        html += `</div></div>`;

        html += `<div class="pistas">`;
        html += `<h3>Pistas</h3>`;
        
        html += `<ul>`;

        for(let item of this.pistas) {
            const duracionModificada = Pistas.convertirSegundos(item.duracion);

            if(item.duracion > 180) {
                html += `<li style="color: green;">${item.nombre} - ${duracionModificada}</li>`;
            } else {
                html += `<li>${item.nombre} - ${duracionModificada}</li>`;
            }
        }

        html += `</ul>`;
        html += `</div></div></div>`;

        return html;
    }

}