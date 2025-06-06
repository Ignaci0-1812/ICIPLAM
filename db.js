db.collection("users").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    });
}).catch(error => console.error("Error obteniendo datos:", error));
