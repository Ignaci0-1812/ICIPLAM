function iniciarSesion() {
    const usuarioIngresado = document.getElementById("usuario").value.trim();
    const contrasenaIngresada = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensajeLogin");

    db.collection("usuarios").doc(usuarioIngresado).get().then((doc) => {
        if (doc.exists) {
            const datosUsuario = doc.data();
            if (datosUsuario.password === contrasenaIngresada) {
                mensaje.textContent = "Ingreso exitoso. Redirigiendo...";
                mensaje.style.color = "green";
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1000);
            } else {
                mensaje.textContent = "Contraseña incorrecta.";
                mensaje.style.color = "red";
            }
        } else {
            mensaje.textContent = "Usuario no encontrado.";
            mensaje.style.color = "red";
        }
    }).catch((error) => {
        mensaje.textContent = "Error de conexión: " + error.message;
        mensaje.style.color = "red";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginButton").addEventListener("click", iniciarSesion);
});