// Håndtering av RSVP-skjema
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindrer at skjemaet sender siden på nytt

    const navn = document.getElementById('navn').value;
    const antall = document.getElementById('antall').value;
    const kommer = document.getElementById('kommer').value;

    // Vise en bekreftelsesmelding
    const responseMessage = `Takk for ditt svar, ${navn}! Du har registrert at du kommer med ${antall} gjester og har svart ${kommer}.`;
    document.getElementById('rsvpResponse').textContent = responseMessage;
});

// Håndtering av allergiskjema
document.getElementById('allergiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindrer at skjemaet sender siden på nytt

    const allergier = document.getElementById('allergier').value;

    // Vise en bekreftelsesmelding
    const responseMessage = allergier ? `Takk! Vi har mottatt informasjon om dine allergier: ${allergier}.` : 'Takk for informasjonen!';
    alert(responseMessage);
});
