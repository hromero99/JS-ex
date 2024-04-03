
function checkCredentials(type) {
    if (type === "all" || type==="username"){
        const usernameInput = prompt("Introduce tu correo")
        if (!usernameInput.includes("@"))
            alert("Correo invalido")
    }
    if (type === "all" || type==="password"){
        const passwordInput = prompt("Introduce tu contraseña")
        if (passwordInput.length < 5 || !passwordInput.includes("@"))
            alert("Tu contraseña no es segura")
    }
   
}

checkCredentials("all")