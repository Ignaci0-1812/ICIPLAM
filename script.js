document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "1234") {
        alert("¡Bienvenido, " + username + "!");
        window.location.href = "dashboard.html"; // Redirigir a otra página
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});
