 function display(abc){
    document.getElementById("cal").value += abc ;

 }
 function clearscreen(){
    document.getElementById("cal").value = "" ;

 }
 function solve(){
    let total = document.getElementById("cal").value;
    let result = eval(total);
    document.getElementById("cal").value = result;
 }