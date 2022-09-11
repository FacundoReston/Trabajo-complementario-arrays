const marcos = ["gitano", "giudicatti", "usual", "rusty", "animal"];

let entrada = prompt("Ingrese un nuevo producto");
let indice = marcos.indexOf(entrada);

if (entrada === ""){
    alert("Error");
} else if(entrada === "stock"){
    alert(marcos.join("\n"));
} else if (indice != -1){
    marcos.splice(indice, 1);
    alert(marcos.join("\n"));
}
else {
    marcos.push(entrada.toLowerCase());
    alert(marcos.join("\n"))
}


// Con este simulador, puedo consultar los productos que tengo en stock de mi negocio, puedo remover productos y mostrarlos por medio de un alert












