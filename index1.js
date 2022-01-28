
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  function encryptText() {
      
    const form = document.forms[0];
    
    let title= document.getElementById("titleId");  
       
    title.innerHTML = "Mensagem Codificada";
    
    let shift= Number(form.shift.value); 
       
    let sourceText = form.sourceText.value;       
       
    form.sourceText.value  = [... sourceText ].map(char =>
        encrypt(char, shift)).join('');
   }  

   function decryptText() {
    const form = document.forms[0];
    let title = document.getElementById("titleId");       
      
     title.innerHTML = "Mensagem";
         
     let shift =  Number(form.shift.value);
    let sourceText = form.sourceText.value;    
         
     shift = (alfabeto.length - shift) %  alfabeto.length;
        
     form.sourceText.value = [...sourceText].map(char => 
            encrypt(char ,shift)).join('');
     }

function encrypt(char, shift) {
    let include = alfabeto.includes(char.toLowerCase()); 
       
    if (include){      
     let posicao = alfabeto.indexOf(char.toLowerCase());
        
     let novaPosicao = (posicao + shift) % alfabeto.length;
  return alfabeto[novaPosicao];
   } else  return char;
  }



