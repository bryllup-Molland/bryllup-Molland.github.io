//document.addEventListener("DOMContentLoaded", function() {
//    const giftList = document.getElementById("gift-list");
//    const confirmButton = document.getElementById("confirm-button");
//
    // Referanse til gave-databasen
//    const gaverRef = firebase.database().ref("gaver");

    // Hent gaver fra Firebase
//    gaverRef.once("value", function(snapshot) {
//        snapshot.forEach(function(childSnapshot) {
  //          const gave = childSnapshot.val();
    //        const giftItem = document.createElement("li");
      //      giftItem.textContent = `${gave.gave} - ${gave.antall - gave.kjopt} igjen`;

            // Legg til "Kjøpt"-knapp
        //    const buyButton = document.createElement("button");
          //  buyButton.textContent = "Kjøpt";
            //buyButton.onclick = function() {
              //  const giftId = childSnapshot.key;
                //const currentCount = gave.kjopt + 1;

                // Oppdater gaven i Firebase
                //gaverRef.child(giftId).update({
                  //  kjopt: currentCount
                //}).then(function() {
                  //  alert(`${gave.gave} er nå kjøpt!`);
                    //giftItem.textContent = `${gave.gave} - ${gave.antall - currentCount} igjen`;
               // });
       //     };

       //     giftItem.appendChild(buyButton);
        //    giftList.appendChild(giftItem);
  //      });
// });
//});