function funcequal() {
  var number = document.getElementById('display').value;
  number = eval(number);
  document.getElementById('display').value = number;
 }

 function disnum(num) {
   document.getElementById('display').value += num;
  }

 function clearfunc(){
    document.getElementById('display').value = '';  
  }
        
function backfunc(){
    var num = document.getElementById('display').value;
    document.getElementById('display').value = num.substr(0, num.length - 1);  
 }
