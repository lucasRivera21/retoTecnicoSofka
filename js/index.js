const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

console.log(inputs);

const aux = inputs[1].value;

const validarFormulario = (e) => {
    switch(e.target.name){
        case "pais":
            console.log("funciona");
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

let bool = false;

class Nave{
    constructor(nombre, tipo, pais, peso, combustible){
        this.nombre = 'nombre';
        this.tipo = tipo;
        this.pais = 'pais';
        this.peso = peso;
        this.combustible = 'combustible';
    }
}

/*boton.addEventListener("click", () => {
    console.log("Hay click");
})*/