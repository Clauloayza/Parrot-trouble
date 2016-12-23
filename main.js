var hora = document.getElementById("hora");
var talking = document.getElementById("talking");
var pSalida = document.getElementById("salida");


function evaluar() {
    var parrot = false;
    var phora = hora.value;
    
    if(talking =="1"){
        parrot = true;
        
    }
    
  if(parrot){
      if(phora>=7 && phora<=20){
          pSalida.innerHTML = "No";
      }
      else{
          pSalida.innerHTML = "Si"
      }
  }
else{
      pSalida.innerHTML = "No";
  }
}
