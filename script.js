document.getElementById('formulaire').addEventListener('submit', function(event) {


    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 


    if (nom === "") {
        alert("Le champ 'Nom' ne doit pas être vide.");
        return false;
    }


    if (!emailRegex.test(email)) {
        alert("Veuillez entrer un email valide.");
        return false;
    }


    if (message === "") {
        alert("Le champ 'Message' ne doit pas être vide.");
        return false;
    }


    alert("Formulaire soumis avec succès !");
    return true;
});

