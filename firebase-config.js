if (typeof firebase === "undefined") {
    console.error("Firebase no está definido. Revisa el orden de los scripts en login.html.");
} else {
    const firebaseConfig = {
        apiKey: "AIzaSyCszb01ppFx3-lvMGYHjBNgEh_5oi3UXkA",
        authDomain: "proyecto-d910f.firebaseapp.com",
        projectId: "proyecto-d910f",
        storageBucket: "proyecto-d910f.firebasestorage.app",
        messagingSenderId: "159534098700",
        appId: "1:159534098700:web:2757ec1bb82fdb44818129"
    };

    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);
    window.auth = firebase.auth();
    window.db = firebase.firestore();
}
