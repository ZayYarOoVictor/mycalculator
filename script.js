  var inp=document.querySelector('.input');
  var ans=document.querySelector('.ans');
  var inputs='';
  var to_cal='';
  var answ='0';
   function btn(num){
     inputs+=num;
     to_cal+=num;
     inp.innerHTML=inputs;
     ans.innerHTML=eval(to_cal);
     ans.style.fontSize = '50px';
     inp.style.fontSize = '100px';
    answ='0';
   } 
  function del(){
    answ='0';
    inputs=inputs.substring(-1,inputs.length-1);
    to_cal=to_cal.substring(-1,to_cal.length-1);
    inp.innerHTML=inputs;
    if(inputs==''){inp.innerHTML=0}
    
    if(to_cal==''){
      ans.innerHTML=0;
    }
    var con=inputs.substr(-1,inputs.length);
    if(con=='+'||con=='-'||con=='×'||con=='÷'){
      ans.innerHTML=eval(to_cal.substring(-1,to_cal.length-1))
    }else if(to_cal){
      ans.innerHTML=eval(to_cal);
    }
    ans.style.fontSize = '50px';
    inp.style.fontSize = '100px';
  }
  
  function all_clear(){
    answ='0';
    inputs='';
    to_cal='';
    inp.innerHTML='0';
    ans.innerHTML='';
    ans.style.fontSize = '50px';
    inp.style.fontSize = '100px';
  }
  
  function sign(operator,operator2){
  

    let sign=inputs.substr(-1,inputs.length);
    
    if(sign=='+'||sign=='-'||sign=='×'||sign=='÷'){
      inputs=inputs.substring(-1,inputs.length-1);
      to_cal=to_cal.substring(-1,to_cal.length-1);
    }else if(sign=='' && answ!=''||sign==''&&answ=='0'){
      inputs=answ;
      to_cal=answ;
      inp.innerHTML=inputs;
      answ='';
    }
      inputs+=operator;
      to_cal+=operator2;
      inp.innerHTML=inputs;
      
    ans.style.fontSize = '50px';
    inp.style.fontSize = '100px';
  }
  function point(){
    if(inputs.substr(-1,inputs.length)!='.'){
      to_cal+='.';
      inputs+='.';
      inp.innerHTML=inputs;
      ans.style.fontSize = '50px';
      inp.style.fontSize = '100px';
    }
    answ='';
  }
  function cal(){
    
    let sign = inputs.substr(-1, inputs.length);
    
    if (sign == '+' || sign == '-') {
      to_cal+=0;
      inputs+=0;
    }else if(sign=='×'||sign=='÷'){
      to_cal+=1;
      inputs+=1;
    }
    if(to_cal){
    answ=eval(to_cal);
    to_cal='';
    inputs='';
    
    
    ans.style.fontSize='100px';
    inp.style.fontSize='50px';
    }
  }
    