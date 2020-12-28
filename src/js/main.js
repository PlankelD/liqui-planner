"use strict"

// globale Variablen
let einnahmen = 0,
    ausgaben = 0, 
    bilanz = 0,
    titel, 
    typ , 
    betrag, 
    datum;

//Eingabedaten holen
const eintragErfassen = function () {
titel = prompt("Titel:");
typ = prompt("Typ (Einnahme oder Ausgabe):");
betrag = parseInt(prompt("Betrag (in Cent)"));
datum = prompt("Datum (jjjj-mm-tt):");
};
// Konsole Ausgeben und Anzeigen lassen
const eintragAusgeben = function (titel, typ, betrag, datum) {
    console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`
);
};
// Berechnung der Gesamtbilanz
const eintragMitGesamtbilanzVerrechnen = function (typ,betrag) {
    if(typ === "Einnahme"){
        einnahmen = einnahmen + betrag;
        bilanz = bilanz + betrag;
    } else if(typ ==="Ausgabe"){
        ausgaben = ausgaben + betrag;
        bilanz = bilanz - betrag;
    } else {
        console.log(`Der Typ "${typ}" ist nicht bekannt.`);
    }
};
// Ausgeben in der Konsole
const gesamtbilanzAusgeben = function (einnahmen, ausgaben, bilanz) {
    console.log(`
Einnahmen: ${einnahmen}
Ausgaben: ${ausgaben}
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${bilanz >= 0}`
);
};

const eintragHinzufuegen = function (){
    eintragErfassen();
    eintragAusgeben(titel, typ, betrag, datum);
    eintragMitGesamtbilanzVerrechnen(typ, betrag);
    gesamtbilanzAusgeben(einnahmen,ausgaben,bilanz);
};

eintragHinzufuegen();
eintragHinzufuegen();
eintragHinzufuegen();

