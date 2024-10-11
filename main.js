//prvi zadatak//
const PI = 3.14;
function obim(poluprecnik) {
    return 2 * PI * poluprecnik; 
}
const poluprecnik = parseFloat(prompt("Unesite poluprečnik kruga:"));
const rezultatObima = obim(poluprecnik);
console.log(`Obim kruga sa poluprečnikom ${poluprecnik} je: ${rezultatObima}`);


//drugi zadatak

const pravougaonik = function(a, b) {
    return a * b; 
};

const stranicaA = parseFloat(prompt("Unesite dužinu stranice A pravougaonika:"));
const stranicaB = parseFloat(prompt("Unesite dužinu stranice B pravougaonika:"));

const povrsina = pravougaonik(stranicaA, stranicaB);
console.log(`Površina pravougaonika sa stranicama ${stranicaA} i ${stranicaB} je: ${povrsina}`);


//treci zadatak
const kvadrat = (a) => {
    const obim = (function(a) {
        return 4 * a;
    })(a);
    const povrsina = (function(a) {
        return a * a;
    })(a);
    console.log(`Obim kvadrata sa stranicom ${a} je: ${obim}`);
    console.log(`Površina kvadrata sa stranicom ${a} je: ${povrsina}`);
};
const stranica = parseFloat(prompt("Unesite dužinu stranice kvadrata:"));

kvadrat(stranica);

//cetvrti zadatak

const obimPravougaonika = (duzina, sirina) => 2 * (duzina + sirina);

const duzina = parseFloat(prompt("Unesite dužinu pravougaonika:"));
const sirina = parseFloat(prompt("Unesite širinu pravougaonika:"));
const obimP = obimPravougaonika(duzina, sirina);
console.log(`Obim pravougaonika je: ${obimP}`);
//peti
(function() {
    const name = prompt("Unesite vaše ime:");
    console.log(`Pozdrav, ${name}!`);
})();