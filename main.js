var hora = document.getElementById("hora");
var pSalida = document.getElementById("salida");
var img = document.getElementById("img");

function evaluar() {
    var talking = document.getElementById("talking").value;
    var parrot = false;
    var phora = hora.value;
    
    if(talking =="1"){
        parrot = true;
        
    }
    
  if(parrot){
      if(phora>=7 && phora<=20){
          pSalida.innerHTML = "NO";
          img.innerHTML = '<img src="parrot%20talking.png" width="50%" alt="">';
      }
      else{
          pSalida.innerHTML = "SI";
          img.innerHTML = '<img src="dont%20talking.png" width="50%" alt="">';
      }
  }else{
      pSalida.innerHTML = "NO";
      img.innerHTML = '';
  }
}
