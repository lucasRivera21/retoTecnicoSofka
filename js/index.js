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
    div.style.padding = "10px";
    div.style.borderBottom = "3px solid #141527"

    nombreDiv.textContent = nave1.nombre;

    //tipo de nave
    if(nave1.tipo == "lanzadera"){
        nave1.tipo = "Vehiculo lanzadera";
    }else if(nave1.tipo == "no-tripulado"){
        nave1.tipo = "Vehiculo no tripulado";
    }else{
        nave1.tipo = "Vehiculo tripulado";
    }

    parrafoDiv.textContent = "TIPO: " + nave1.tipo + ",  PAIS: " + nave1.pais + ",  PESO: " + nave1.peso + "Kg ,  COMBUSTIBLE: " + nave1.combustible;
    
    div.classList.toggle("nave");   //Asignación de clase

    //mostrar en HTML
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

const buscar = document.getElementById('buscar');

buscar.addEventListener("keyup", (e) => {
    if(e.target.matches("#buscar")){
        document.querySelectorAll(".nave").forEach(titulo => {
            titulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?titulo.classList.remove("filtro")
                :titulo.classList.add("filtro")
        })
    }
    console.log(e.target.value);
});

//creador de naves default
function defecto(nombre, tipo, pais, peso, combustible){
    let naveDefault = new Nave(nombre, tipo, pais, peso, combustible);

    const div = document.createElement("div");
    const nombreDiv = document.createElement("h3");
    const parrafoDiv = document.createElement("p");
    const infoNave = document.getElementById("navesContainer");

    infoNave.style.backgroundColor = "#182693";
    infoNave.style.border = "#141527 10px solid";
    div.style.padding = "10px";
    div.style.borderBottom = "3px solid #141527"

    nombreDiv.textContent = naveDefault.nombre;
    parrafoDiv.textContent = "TIPO: " + naveDefault.tipo + ",  PAIS: " + naveDefault.pais + ",  PESO: " + naveDefault.peso + "Kg ,  COMBUSTIBLE: " + naveDefault.combustible;

    div.classList.toggle("nombreNave");

    div.appendChild(nombreDiv);
    div.appendChild(parrafoDiv);
    infoNave.appendChild(div);
}

//Nave 1
defecto("Saturno V", "Vehiculo lanzadera", "EEUU", "3500000", "Hidrogeno");

//Nave 2
defecto("Ariane V", "Vehiculo lanzadora", "Europa", "2400000", "Carbono");

//nave 3
defecto("Progreso M Sputnik", "Vehiculo no tripulado", "Rusia", "0,44", "Nitrogeno");

//nave 4
defecto("Shenzou", "Vehiculo tripulado", "china", "420000", "Nitrogeno");