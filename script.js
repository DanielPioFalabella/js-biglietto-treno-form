// OUTPUT
const myForm = document.getElementById("myForm");
const annulla = document.getElementById("annulla");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // INPUT
    // quanti km vuole percorrere il passeggero
    let numKm = document.getElementById("numKm").value
    console.log("Km da percorrere:", numKm);

    // età del passeggero
    let sceltaEta = document.getElementById("sceltaEta").value
    console.log("età del passeggero:", sceltaEta);

    // prezzo totale del biglietto per il viaggio
    let bigliettoBase = numKm * 0.21;

    // sconto del biglietto in base all'età del passeggero
    let bigliettoFinale;

    if (sceltaEta === "minorenne") {
        bigliettoFinale = bigliettoBase * 0.8; // sconto del 20%
    } else if (sceltaEta === "over-65") {
        bigliettoFinale = bigliettoBase * 0.6; // sconto del 40%
    } else {
        bigliettoFinale = bigliettoBase;
    }

    console.log("Costo del biglietto", bigliettoFinale)

    // OUTPUT genera in pagina
    document.getElementById("costoBiglietto").innerHTML = 
    `<h4>Costo biglietto</h4> 
    ${bigliettoFinale.toFixed(2)}`

    // OUTPUT annulla
    annulla.addEventListener("click", () => {
        myForm.reset();
        document.getElementById("costoBiglietto").innerHTML = ""; // reset dei dati
    })

})


