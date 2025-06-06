auth.onAuthStateChanged(user => {
    if (user) {
        console.log("Usuario autenticado:", user.email);
    } else {
        console.log("No hay usuario autenticado.");
    }
});
