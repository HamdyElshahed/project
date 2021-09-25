var myform = document.getElementById('myform')
var username= document.getElementById('username')
var national= document.getElementById('national')
var email= document.getElementById('email')
var password= document.getElementById('password')

function sub()
{
    var username= document.getElementById('username')
    var national= document.getElementById('national')
    var email= document.getElementById('email')
    var password= document.getElementById('password')
    var reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    var regg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if(username.value.trim() == "" || national.value.trim() == "" || email.value.trim() == "" || password.value.trim() == ""){
        alert("invalid");
        return false;
    }
    else if(username.value.trim().length <  3 || username.value.trim().length > 30){
        handleError(username , 'invalid' , "Name must be between 3 and 30 character")
        alert("Name must be between 3 and 30 character");
        return false;
    }
    else if(national.value.trim().length <  14 || national.value.trim().length > 14){
        handleError(national , 'invalid' , "Name must be 14 numbers")
        alert("national id must be 14 numbers");
        return false;
    }
    else if(reg.test(email)){
        handleError(email , 'invalid' ,"please enther a valid email")
        return false;
    }
    else if(regg.test(password)){
        handleError(password ,'invalid' ,  "incorrect data")
        return false;
    }         
    else{
        handleError(username , 'valid');
        handleError(national , 'valid');
        handleError(email , 'valid');
        handleError(password , 'valid');
        true;
    }
}
function handleError (input ,  type , message = ''){
    var small = input.nextElementSibling;
    small.textContent = message;
   if (type === 'invalid') {
    input.style.borderColor="red";
    small.style.color="white "
   }  
   else if(type === 'valid'){
    input.style.borderColor = "blue";
    small.style.color="black"
   }
}

/*var mybutton= document.getElementById('mybutton')

function checkname(){
    var name01=username.value.trim()
    
    if(name01.length <  3 || name01.length > 30){
        handleError(username , 'invalid' , "Name must be between 3 and 30 character")
    }
    else{
        handleError(username , 'valid') 
    }
}
function checknational(){
    var nat=national.value.trim()
    if(isNaN(nat) || nat.length <  14 || nat.length > 14){
        handleError(national , 'invalid' , "Name must be 14 numbers")
    }
    else{
        handleError(national , 'valid') 
    }
}
function checkPassword(){
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    
    passvalid = password.value.trim()
    if(reg.test(passvalid)){
        handleError(password ,'invalid' ,  "incorrect data")
    } 
    else{
        handleError(password , 'valid')
    }
    
}

function checkEmail(){
    var reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    emailvaid = email.value.trim()
    if(reg.test(emailvaid)) handleError(email , 'valid')
    else handleError(email , 'invalid' ,"please enther a valid email")
}
/*function checkButton(){
    var btn =  emailvaid /* passvalid , nat ,name01*/;
    if (isNaN(btn) || btn < 1 || btn > 10){
        //handleError(btn , 'invalid' , "Name must be 14 numbers")
    } else {
        //handleError(btn , 'valid') 
    }
    

/*myform.addEventListener('submit' , (e) =>{
    let messages =[]
    if(username.value === '' || username.value == null){
        messages.push('name is req')
    }
    
}) 


myform.addEventListener('input', function(e)
{
    console.log(e.target.id);
    switch(e.target.id){
        case 'username':
            checkname()
        break;
        case 'national':
            checknational()
        break;
        case 'email':
            checkEmail()
        break;
        case 'password':
            checkPassword()
        break;
       /* case 'mybutton':
            checkButton()
        break;
        
    }

})
*/