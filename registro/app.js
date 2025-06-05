function guardarUsuario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const edad = parseInt(document.getElementById("edad").value);

  db.collection("usuarios").add({
    nombre: nombre,
    email: email,
    edad: edad
  })
  .then((docRef) => {
    console.log("Usuario guardado con ID:", docRef.id);
  })
  .catch((error) => {
    console.error("Error al guardar usuario:", error);
  });
}
