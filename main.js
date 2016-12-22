var talking = document.getElementById("talking");
var pSalida = document.getElementById("salida");

function calcular() {
    var parrot = talking.value;


    if (parrot == "true" ) {
        
       
    } else {
        
     if (20<parrot<6) {
            pSalida.innerHTML = "Si";
        } 
        
        else {
            pSalida.innerHTML = "No";
        }
    }
}