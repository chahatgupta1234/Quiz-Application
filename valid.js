	//Validtion Code For Inputs

    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];
    
    
    
    function validated(){
        if (email.value== "admin") {
            if (password.value == "admin") {
            alert('Succesfully login'); 
            }
            else
            alert('wrong Password')
        }      
        else
            alert('wrong email')
    }
   