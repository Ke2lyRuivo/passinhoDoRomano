//const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0","1","2","3","4","5","6","7","8","9","+","/"]
 
function encryptBaText(){
    const form = document.forms[0];
    const string = document.getElementById('titleId');
    string.innerHTML = "Mensagem Codificada";
    let sourceText = form.sourceText;   
    const emBase64 = btoa(sourceText.value);
    sourceText.value = emBase64;
    
}

function decryptBaText(){

    const string = document.getElementById('titleId');
    string.innerHTML = "Mensagem Decodificada";
    const form = document.forms[0];
    let sourceText = form.sourceText;   
    const emBase64 = atob(sourceText.value);
    sourceText.value = emBase64;
  
}

