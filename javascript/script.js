/* elementi necessari */
const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome-cognome");
const kmInput = document.querySelector("#chilometri");
const etaInput = document.querySelector("#select");
const resalt = document.querySelector(".card");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nomeInput.value.trim();
  const km = parseInt(kmInput.value);
  const eta = etaInput.value;

  elaborazioneBiglietto(km, eta, name);
});

function elaborazioneBiglietto(km, eta, name) {
  if (isNaN(km) || km <= 0 || name === "" || !isNaN(name)) {
    alert("Inserisci input validi");
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

    risultatoInPagina(risultatoFormattato, name);
  }
}

function risultatoInPagina(prezzo, name) {
  const nomePasseggero = name;
  resalt.innerHTML = `<div class="card-header">
                <h4 class="text-center">Nome Passeggero</h4>
                <h6 class="text-center mt-3">${nomePasseggero}</h6>
              </div>
              <div class="card-body">
                <h5 class="card-title">Offerta</h5>
                <p class="card-text">Biglietto standard</p>
                <h5 class="card-title">Carrozza</h5>
                <p class="card-text">5</p>
                <h5 class="card-title">Codice cp</h5>
                <p class="card-text">9000</p>
                <h5 class="card-title">Costo biglietto</h5>
                <p class="card-text">${prezzo}$</p>
              </div>`;
}
