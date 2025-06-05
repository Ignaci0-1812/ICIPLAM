function registrarUsuario() {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value;

  // Validar longitud del usuario
  if (usuario.length === 0 || usuario.length > 16) {
    alert("El usuario debe tener entre 1 y 16 caracteres.");
    return;
  }

  // Validar contraseña: solo letras y números
  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(password)) {
    alert("La contraseña solo puede contener letras y números.");
    return;
  }

  // Guardar en Firestore
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
