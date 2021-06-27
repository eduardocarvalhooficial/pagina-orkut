function validaCampos(){    
    senha = document.getElementById("senha1").value;
    emailaddress = document.getElementById("email1").value;

    if(emailaddress.length < 1){
        alert("Necessário informar o e-mail");
        return false;
     }

     if(senha.length < 1){
        alert("Necessário informar a senha");     
        return false;   
     }
}

function validate() {
    emailaddress = document.getElementById("email1").value; 
    senha = document.getElementById("senha1").value;
    emailaddress = emailaddress.trim();

    if(emailaddress.length < 1){
       return false;
     }

     if(senha.length < 1){
          
        return false;   
     }

    if(emailaddress.length >= 1){
        var msg = validaEmail(emailaddress);
    } 

    if(msg && senha.length >= 1){
        alert("Conectado com Sucesso!");
    }
            
    if (msg) {
        console.log("fff");

    } else {
        alert("E-mail inválido");
        return false;
    } 

   
     
}

function validaEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(email);
}