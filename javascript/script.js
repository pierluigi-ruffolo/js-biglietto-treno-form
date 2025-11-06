/* elementi necessari */
const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome-cognome");
const kmInput = document.querySelector("#chilometri");
const etaInput = document.querySelector("#select");
const resalt = document.querySelector(".card");
const colForm = document.querySelector(".col-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nomeInput.value.trim();
  const km = parseInt(kmInput.value);
  const eta = etaInput.value;
  elaborazioneBiglietto(km, eta, name);
});

function elaborazioneBiglietto(km, eta, name) {
  if (
    isNaN(km) ||
    km <= 0 ||
    name === "" ||
    !isNaN(name) ||
    eta === "Fascia eta"
  ) {
    alert("Inserisci input validi");
  } else {
    const prezzoKm = 0.21;
    const prezzoBiglietto = km * prezzoKm;
    let risultatoNum = 0;
    let tariffa = "";
    if (eta === "Minorenne") {
      risultatoNum = prezzoBiglietto * 0.8;
      tariffa = "Sconto Under 17";
    } else if (eta === "Over") {
      risultatoNum = prezzoBiglietto * 0.6;
      tariffa = "Sconto Over 65";
    } else {
      risultatoNum = prezzoBiglietto;
      tariffa = "standard";
    }
    console.log(tariffa);
    const risultatoFormattato = risultatoNum.toFixed(2);

    risultatoInPagina(risultatoFormattato, name, tariffa);
  }
}

function risultatoInPagina(prezzo, name, tariffa) {
  colForm.classList.add("col-md-6");
  const numCarrozza = generaCarrozza();
  const numCp = generaCodiceCp();
  resalt.classList.remove("d-none");
  resalt.innerHTML = `<div class="card-header bg-primary-subtle">
                <h4 class="text-center">Nome Passeggero</h4>
                <h6 class="text-center mt-3">${name}</h6>
              </div>
              <div class="card-body bg-transparent">
                <h5 class="card-title">Offerta</h5>
                <p class="card-text border-bottom fw-bold">${tariffa}</p>
                <h5 class="card-title">Carrozza</h5>
                <p class="card-text border-bottom fw-bold">${numCarrozza}</p>
                <h5 class="card-title">Codice cp</h5>
                <p class="card-text border-bottom fw-bold">${numCp}</p>
                <h5 class="card-title">Costo biglietto</h5>
                <p class="card-text border-bottom fw-bold">${prezzo}$</p>
              </div>`;
}

function generaCarrozza() {
  const numRandomCarrozza = Math.floor(Math.random() * 6) + 1;
  return numRandomCarrozza;
}
function generaCodiceCp() {
  const numRandomCp = Math.floor(Math.random() * 99999) + 1;
  return numRandomCp;
}

form.addEventListener("reset", () => {
  colForm.classList.remove("col-md-6");
  resalt.classList.add("d-none");
});
