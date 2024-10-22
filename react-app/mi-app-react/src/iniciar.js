document.getElementById(login-form).addEventListener("submit", function(event){
    event.preventDefault();

    const email= document.getElementById("username").value;
    const password= document.getElementById("password").value;

    if(email && password){
        window.localStorage.setItem("userEmail", email);
        window.location.href= "Canvas.js";
    }else{
        document.getElementById("error").style.display= "block";
        document.getElementById("error").innerText= "Correo o contraseña incorrectos";
    }
});