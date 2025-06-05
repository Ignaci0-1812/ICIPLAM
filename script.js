const firebaseConfig = {
    apiKey: "AIzaSyCszb01ppFx3-lvMGYHjBNgEh_5oi3UXkA",
    authDomain: "proyecto-d910f.firebaseapp.com",
    projectId: "proyecto-d910f",
    storageBucket: "proyecto-d910f.firebasestorage.app",
    messagingSenderId: "159534098700",
    appId: "1:159534098700:web:2757ec1bb82fdb44818129"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function iniciarSesion() {
    const emailIngresado = document.getElementById("email").value.trim();
    const contrasenaIngresada = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensajeLogin");

    auth.signInWithEmailAndPassword(emailIngresado, contrasenaIngresada)
        .then((userCredential) => {
            mensaje.textContent = "Ingreso exitoso. Redirigiendo...";
            mensaje.style.color = "green";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        })
        .catch((error) => {
            mensaje.textContent = "Error: " + error.message;
            mensaje.style.color = "red";
        });
}