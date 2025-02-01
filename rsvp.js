document.addEventListener("DOMContentLoaded", function() {
    if (!window.firebase) {
        console.error("Firebase is not loaded properly!");
        return;
    }

    const form = document.getElementById("rsvpForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const navn = document.getElementById("navn").value;
        const kommer = document.querySelector('input[name="kommer"]:checked').value;
        const allergier = document.getElementById("allergier").value;

        // Referanse til database
        const rsvpRef = firebase.database().ref("rsvp");

        // Opprett et unikt ID for hvert svar (bruker navn som ID, kan endres)
        const newRSVP = rsvpRef.push();
        newRSVP.set({
            navn: navn,
            kommer: kommer,
            allergier: allergier
        }).then(function() {
            alert("RSVP sendt!");
            form.reset();
        }).catch(function(error) {
            alert("Noe gikk galt: " + error.message);
        });
    });
});
