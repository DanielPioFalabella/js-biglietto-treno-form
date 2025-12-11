// quanti km vuole percorrere il passeggero
let numKm = ""
console.log("Km da percorrere:", numKm);

// età del passeggero
let etaPasseggero = ""
console.log("età del passeggero:", etaPasseggero);


// prezzo totale del biglietto per il viaggio
const bigliettoBase = numKm * 0.21;
console.log(bigliettoBase);

// sconto del biglietto in base all'età del passeggero
if (etaPasseggero < 18) {
    let bigliettoFinale = bigliettoBase * 0.8;
    console.log("prezzo del biglietto", bigliettoFinale)
} else if (etaPasseggero >= 65) {
    bigliettoFinale = bigliettoBase * 0.6;
    console.log("prezzo del biglietto", bigliettoFinale);
    
} else {
    bigliettoFinale = bigliettoBase;
    console.log("prezzo del biglietto", bigliettoFinale);
}

// OUTPUT in pagina
document.getElementById("prezzo-biglietto").textContent = `Prezzo del biglietto: €${bigliettoFinale.toFixed(2)}`