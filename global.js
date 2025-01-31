document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header").innerHTML = `
        <nav>
            <a href="index.html" class="logo">Maria & Christoffer</a>
            <ul>
                <li><a href="index.html">FORSIDE</a></li>
                <li><a href="sted.html">STED OG DATO</a></li>
                <li><a href="gaver.html">GAVER</a></li>
                <li><a href="RSVP.html">RSVP</a></li>
            </ul>
        </nav>
    `;

    document.getElementById("footer").innerHTML = `
        <p>Maria & Christoffer 2025</p>
        <p>Designet med kjærlighet ❤️</p>
    `;
});
