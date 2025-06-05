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
            mensaje.textContent = "Login exitoso";
            mensaje.style.color = "green";
        } else {
            mensaje.textContent = "Usuario o contraseña incorrectos";
            mensaje.style.color = "red";
        }
        })
        .catch((error) => {
        console.error("Error al iniciar sesión:", error);
        mensaje.textContent = "Ocurrió un error al intentar iniciar sesión";
        mensaje.style.color = "orange";
    });
}
