    function validate(event){
    event.preventDefault();
    var Uid = document.getElementById("Uid").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/
    var isValid = true;
    if(Uid.length===0){
      document.getElementById("uidError").innerHTML="UserId is required";
      isValid = false;
    }
    else{
      document.getElementById("uidError").innerHTML="";
    }
    if(email.length === 0){
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
     }
     else{
        document.getElementById("emailError").innerHTML = "";
     }
     if(password.length === 0){
        document.getElementById("passError").innerHTML = "Password is required";
        isValid = false;
     }
     else if(!passwordRegex.test(password)){
        document.getElementById("passError").innerHTML = "Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.";
        isValid = false;
     }
     else{

        document.getElementById("passError").innerHTML = ""
     }
     if (isValid){
         onSignin();
     }
     else{
      document.getElementById('signupform').reset(); 
     }
     
    //return isValid
     
  }
  
  function validateField(fieldId, errorElementId, validationMessage){
     var value = document.getElementById(fieldId).value;
     if(value.length === 0){
        
        document.getElementById(errorElementId).innerHTML = validationMessage;
     }
     else{
        document.getElementById(errorElementId).innerHTML = ""
     }
  }
  function onSignin(){
        //event.preventDefault();
        let userData={
            Uid:document.getElementById("Uid").value,
            email:document.getElementById("email").value,
            password:document.getElementById("pass").value,
        }
        fetch('http://localhost:8123/admins/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then((data)=> {
            alert (data.message); 
            document.getElementById('signupform').reset();  
            //showPortfolio();  
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Login failed!"); 
        });
    
    }
  




