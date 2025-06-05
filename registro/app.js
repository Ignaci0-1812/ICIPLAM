function registrarUsuario() {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("contrasena").value.trim();

  if (usuario.length === 0 || usuario.length > 16) {
    alert("El usuario debe tener entre 1 y 16 caracteres.");
    return;
  }

  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(password)) {
    alert("La contraseña solo puede contener letras y números.");
    return;
  }

  db.collection("usuarios").add({
    usuario: usuario,
    password: password
  })
  .then((docRef) => {
    console.log("Usuario registrado con ID:", docRef.id);
    alert("Registro exitoso");
  })
  .catch((error) => {
    console.error("Error al registrar:", error);
  });
}