/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60*/



//INPUT

//chiedo user Km
const km = parseInt(prompt("Quanti km vuoi percorrere?"));
//chiedo user età
const eta = parseInt(prompt ("Quanti anni hai?"));


//ELABORAZIONE

//prezzo base
const prezzoKm = 0.21;
let prezzoBase = km * prezzoKm;

//nessuno sconto
let sconto = 0;
//sconti
if (eta < 18){
    sconto = 20;
} else if (eta > 65){
    sconto=40;
}

//prezzo finale
let prezzoFinale = prezzoBase - (prezzoBase * sconto /100);


//OUTPUT
console.log (`Il prezzo del biglietto è di: €${prezzoFinale.toFixed(2)}`);