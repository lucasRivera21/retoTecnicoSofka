function borrar(){                              //limpia los inputs
    document.getElementById("name").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("combustible").value = "";
}


function captura(){
    var tipo;
    var nombre = document.getElementById("name").value;             //nombre de la nave

    var elementos = document.getElementsByName("tipo");             //Tipo de Naves
    for(let i=0; i<elementos.length; i++){
        if(elementos[i].checked){
            tipo = elementos[i].value;
        }    
    }
    console.log(document.getElementsByName("tipo").value);

    var pais = document.getElementById("pais").value;               //pais de origen de la nave
    var peso = document.getElementById("peso").value;               //peso de la nave

    var combustible = document.getElementById("combustible").value; //combustible que usa la nave
    
    
    let nave1 = new Nave(nombre, tipo, pais, peso, combustible);    //nave1 instanciada

    //utilización del DOM 
    const infoNave = document.getElementById("navesContainer");
    const div = document.createElement("div");
    const nombreDiv = document.createElement("h3");
    const parrafoDiv = document.createElement("p");
    
    //estilos de la nave
    infoNave.style.backgroundColor = "#182693";
    infoNave.style.border = "#141527 10px solid";
    div.style.padding = "10px";
    div.style.borderBottom = "3px solid #141527"

    nombreDiv.textContent = nave1.nombre;

    //tipo de nave
    if(nave1.tipo == "lanzadera"){
        nave1.tipo = "Vehículo lanzadera";
    }else if(nave1.tipo == "no-tripulado"){
        nave1.tipo = "Vehículo no tripulado";
    }else{
        nave1.tipo = "Vehículo tripulado";
    }

    parrafoDiv.textContent = "TIPO: " + nave1.tipo + ",  PAIS: " + nave1.pais + ",  PESO: " + nave1.peso + "Kg ,  COMBUSTIBLE: " + nave1.combustible;
    
    div.appendChild(nombreDiv);
    div.appendChild(parrafoDiv);
    infoNave.appendChild(div);
    
    borrar();
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();                         //Evita recargar la página
});

class Nave{                             //plantilla nave
    constructor(nombre, tipo, pais, peso, combustible){
        this.nombre = nombre;
        this.tipo = tipo;
        this.pais = pais;
        this.peso = peso;
        this.combustible = combustible;
    }
}

const boton2 = document.getElementById('boton2');

boton2.addEventListener("click", (e) => {
    let valorBuscar = document.getElementById("buscar").value;
    document.getElementById("buscar").value = "";

    valorBuscar = valorBuscar.toUpperCase();    //convertir valor en mayúscula
});



/*const formulario = document.getElementById('formulario');
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



/*boton.addEventListener("click", () => {
    console.log("Hay click");
})*/