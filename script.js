function logFormData() {
    const nameInput = document.getElementById("NameLogin").value;
    const passwordInput = document.getElementById("password").value;

    fetch('credentials')
        .then(response => response.json())
        .then(data => {
            const users = data.users;
            const user = users.find(user => user.name === nameInput && user.password === passwordInput);
            if (user) {
                window.location.href = "/Admin.html";
            } else {
                console.log("Identifiants incorrects. Veuillez réessayer.");
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors du chargement du fichier JSON:', error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement
        logFormData(); // Appelle la fonction pour afficher les données du formulaire dans la console
    });
});




