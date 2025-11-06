/* elementi necessari */
const form = document.querySelector("form");
const kmInput = document.querySelector("#chilometri");
const etaInput = document.querySelector("#eta");
const resalt = document.querySelector(".resalt");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const km = parseInt(kmInput.value);
  const eta = etaInput.value;
  elaborazioneBiglietto(km, eta);
});

function elaborazioneBiglietto(km, eta) {
  if (isNaN(km) || km <= 0) {
    alert("Inserisci km");
  } else {
    const prezzoKm = 0.21;
    const prezzoBiglietto = km * prezzoKm;
    let risultatoNum = 0;
    if (eta === "Minorenne") {
      risultatoNum = prezzoBiglietto * 0.8;
    } else if (eta === "Over") {
      risultatoNum = prezzoBiglietto * 0.6;
    } else {
      risultatoNum = prezzoBiglietto;
    }
    const risultatoFormattato = risultatoNum.toFixed(2);

    risultatoInPagina(risultatoFormattato);
  }
}

function risultatoInPagina(risultato) {
  resalt.innerHTML = ` Il prezzo del tuo biglietto è €${risultato}`;
}
