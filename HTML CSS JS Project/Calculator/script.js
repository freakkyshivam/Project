
 
 let display = document.getElementById('display');
 let inputs = document.querySelectorAll('input');

 inputs.forEach(input => {
    input.addEventListener('click', (e)=>{
     
      if(e.target.value === "AC"){
        display.value = ''
      }
      else if(e.target.value === 'DE'){
        display.value = (display.value.toString().slice(0, -1))
      }
      else if(e.target.value === "="){
        let equal = document.querySelector('.equal');

        equal.addEventListener('click', () =>{
           try {
               display.value = eval(display.value);
           } catch (error) {
               display.value = 'ERROR'
           }
        });
      }
      else{
        display.value += e.target.value;  
      }
    })    
 });

  

  


