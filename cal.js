const first=document.getElementById('first');
const second=document.getElementById('second');
const operator=document.getElementById('operators');
const final=document.getElementById('final');
const result=document.getElementById('result');
var status='none';
var condi='one';
var finish=false;

  function add(zay){
    finish=false;
    final.style.display='none';
    result.innerHTML='';
  result.style.display='block';
    if(condi=='one'){
      first.innerHTML=first.innerHTML+zay;
      
    }else if(condi=='two'){
      second.innerHTML=second.innerHTML+zay;
      
      if (status == 'plus') {
        result.innerHTML = +first.innerHTML + +second.innerHTML;
      
      } else if (status == 'minus') {
        result.innerHTML = +first.innerHTML - +second.innerHTML;
      
      } else if (status == 'multi') {
        result.innerHTML = +first.innerHTML * +second.innerHTML;
      
      } else if (status == 'divi') {
        result.innerHTML = +first.innerHTML / +second.innerHTML;
      
      };
      
    };
    
  };
  
  
  function cal(zay){
      
      final.style.display='none';
      
      if(first.innerHTML==''){
        if(finish==true){
          first.innerHTML=result.innerHTML;
          
        }else if(finish==false){
          
        first.innerHTML=0;
        };
        condi='two';
      }else if (second.innerHTML !== '') {
        first.innerHTML = result.innerHTML;
        operator.innerHTML='';
        second.innerHTML='';
        result.innerHTML='';
      } else if(condi=='one'){
        condi='two';
      }
      
      if (zay == 1) {
        operator.innerHTML = '&plus;';
        status = 'plus';
        
      } else if (zay == 2) {
        operator.innerHTML = '&minus;';
        status = 'minus';
      
      } else if (zay == 3) {
        operator.innerHTML = '&times;';
        status = 'multi';
        
      } else if (zay == 4) {
        operator.innerHTML = '&div;';
        status = 'divi';
      
        }
      
    
    finish=false;
    
  }
  
  function calculate()  {
    if(finish==false){
      final.style.display = 'block';
      if (status == 'plus') {
        result.innerHTML = +first.innerHTML + +second.innerHTML;
      
      } else if (status == 'minus') {
        result.innerHTML = +first.innerHTML - +second.innerHTML;
      
      } else if (status == 'multi') {
        result.innerHTML = +first.innerHTML * +second.innerHTML;
      
      } else if (status == 'divi') {
        result.innerHTML = +first.innerHTML / +second.innerHTML;
      
      }
      
      if (second.innerHTML!=='') {
        final.innerHTML = first.innerHTML + operator.innerHTML + second.innerHTML + '&equals;' + result.innerHTML;
      
      
      
      finish = true;
      status = 'none';
      condi = 'one';
      first.innerHTML = '';
      second.innerHTML = '';
      operator.innerHTML = '';
      result.style.display = 'none';
      }
    }
  }
  
  function del() {
    first.innerHTML='';
    second.innerHTML='';
    operator.innerHTML='';
    result.innerHTML=0;
    var status = 'none';
    var condi = 'one';
    var finish = false;
    final.style.display='block';
    final.innerHTML=0;
    
  }
  