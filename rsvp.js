// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore,addDoc, collection, doc,setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUihHkbpfBmocmno9CWSAExrkb8uHkQrs",
    authDomain: "bryllup-2025.firebaseapp.com",
    databaseURL: "https://bryllup-2025-default-rtdb.firebaseio.com",
    projectId: "bryllup-2025",
    storageBucket: "bryllup-2025.firebasestorage.app",
    messagingSenderId: "35776306302",
    appId: "1:35776306302:web:9d57b4491c3b0905398c2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle RSVP form submission
const rsvpForm = document.getElementById('rsvpForm');
const rsvpResponse = document.getElementById('RSVP-response');

rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    rsvpResponse.textContent = '';

    const navn = document.getElementById('navn').value;
   // const antall = document.getElementById('antall').value;
    const kommerRadio = document.querySelector('input[name="kommer"]:checked');
    const kommer = kommerRadio ? kommerRadio.value : null;

    const allergiTekst = document.getElementById('allergier').value;

    try {
        // Add a new document to the "rsvps" collection
        await addDoc(collection(db, 'rsvps'), {
            navn: navn,
    //        antall: Number(antall),
            kommer: kommer,
            allergier: allergiTekst,
            timestamp: new Date()
        });
        rsvpResponse.textContent = 'Takk! Svaret ditt er registrert.';
        rsvpForm.reset();
    } catch (error) {
        console.error('Error saving RSVP:', error);
        rsvpResponse.textContent = 'En feil oppstod. Prøv igjen senere.';
    }
});

/*
// Handle allergi form submission
const allergiForm = document.getElementById('allergiForm');
const allergiResponse = document.getElementById('allergiResponse');

allergiForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    allergiResponse.textContent = '';

    const allergiTekst = document.getElementById('allergier').value;

    try {
        // Add a new document to the "allergies" collection
        await addDoc(collection(db, 'allergies'), {
            allergier: allergiTekst,
            timestamp: new Date()
        });
        allergiResponse.textContent = 'Takk for at du ga beskjed! Informasjonen er registrert.';
        allergiForm.reset();
    } catch (error) {
        console.error('Error saving allergies:', error);
        allergiResponse.textContent = 'En feil oppstod. Prøv igjen senere.';
    }
});

/*document.addEventListener("DOMContentLoaded", function() {
    // Sjekk om Firebase er lastet inn
    if (typeof firebase === 'undefined') {
        console.error("Firebase is not loaded properly!");
        return;
    }

    // Hent form-elementet
    const form = document.getElementById("rsvpForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Forhindre standard skjemaoppførsel

        // Hent input-felt
        const navn = document.getElementById("navn").value;
        const kommer = document.querySelector('input[name="kommer"]:checked').value;
        const allergier = document.getElementById("allergier").value;

        // Referanse til Realtime Database
        const rsvpRef = firebase.database().ref("rsvp");

        // Lag et unikt ID for hvert svar (kan bruke navn eller auto-generert)
        const newRSVP = rsvpRef.push();
        newRSVP.set({
            navn: navn,
            kommer: kommer,
            allergier: allergier
        }).then(function() {
            alert("RSVP sendt!");
            form.reset();  // Nullstill skjemaet
        }).catch(function(error) {
            alert("Noe gikk galt: " + error.message);  // Feilbehandling
        });
    });
});*/
