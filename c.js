let output = document.getElementById("o")


function display(n){
   output.value += n
}
function clear(){
   output.value = "0";
}
function Delete(){
   output.value = output.value.slice(0,-1);
}

function soll(){
  try{
   output.value = eval(output.value)
  }
  catch{
   output.value = "error"
  }
}


