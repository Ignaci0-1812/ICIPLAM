function iniciarSesion() {
    const usuarioIngresado = document.getElementById("username").value.trim();
    const contrasenaIngresada = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensajeLogin");

    db.collection("usuarios")
        .where("usuario", "==", usuarioIngresado)
        .where("password", "==", contrasenaIngresada)
        .get()
        .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            mensaje.textContent = "Login exitoso. Redirigiendo...";
            mensaje.style.color = "green";

            setTimeout(() => {
            window.location.href = "index.html";
            }, 1000);
        } else {
            mensaje.textContent = "Usuario o contraseña incorrectos";
            mensaje.style.color = "red";
        }
        })
        .catch((error) => {
        console.error("Error al iniciar sesión:", error);
        mensaje.textContent = "Error al intentar iniciar sesión";
        mensaje.style.color = "orange";
        });
}
