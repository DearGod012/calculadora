
function insert(numero){
 var elemento = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML= elemento + numero;
  }
function clean(){
  document.getElementById('resultado').innerHTML="0";
  }
function voltar(){
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML= resultado.substring(0, resultado.length -1);
}
function calcular(){
  var resultado = document.getElementById('resultado').innerHTML;
  if(resultado)
    {
      document.getElementById('resultado').innerHTML = eval(resultado);
      }else{
        document.getElementById('resultado').innerHTML = "0";
        }
  }


