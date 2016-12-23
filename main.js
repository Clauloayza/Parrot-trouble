var hora = document.getElementById("hora");
var pSalida = document.getElementById("salida");


function evaluar() {
    var talking = document.getElementById("talking").value;
    var parrot = false;
    var phora = hora.value;
    
    if(talking =="1"){
        parrot = true;
        
    }
    
  if(parrot){
      if(phora>=7 && phora<=20){
          pSalida.innerHTML = "no";
      }
      else{
          pSalida.innerHTML = "si";
      }
  }else{
      pSalida.innerHTML = "No";
  }
}
