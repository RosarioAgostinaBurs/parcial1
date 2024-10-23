class Biblioteca {

    constructor() {

        this.discos = [];
    }



    cargarDisco() {

        let nombre = Disco.pedirNombre();
        let autor = Disco.pedirAutor();
        let portada = Disco.pedirPortada();
        let codigo = Disco.pedirCodigo();

        let disco = new Disco(nombre, autor, portada, codigo);

        this.discos.push(disco);

        disco.cargarPistas();
    }


    mostrarHTML() {
        let html = "";

        for(let disc of this.discos) {
            html += disc.mostrarHTML();
        }

        return html;
    }

    buscarPorCodigo() {
        let codigo = Disco.pedirCodigo();
        let resultado = this.discos.filter(dis => dis.codigo === codigo);

        let html = "";
        if(resultado.length != 0) {
            resultado.forEach(res => {
                html += res.mostrarHTML();
            });
        } else {
            alert('El disco no existe');
        }

        document.querySelector("#discos").innerHTML = html;
    }
}