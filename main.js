let firstName = "Andrej"; 
let lastName = 'Buncic'; 
let dugiStringUViseRedova = `Lista korisnika:
* Korisnik1
* Korisnik2
* Korisnik3
* Korisnik4`;
console.log(dugiStringUViseRedova);

let firstChar = firstName.charAt(0);
console.log(firstChar);
console.log(firstName.length);

let lastChar = firstName[firstName.length - 1]; 
console.log(lastChar);
console.log(firstName[15]); 
console.log(firstName.charAt(15));

for (let char of firstName) {
    console.log(char);
}

firstName[0] = 'd'; 
console.log(firstName[0]);

console.log(firstName.toLowerCase()); 
console.log(firstName.toUpperCase());
console.log(firstName[0].toLowerCase()); 
console.log(firstName[firstName.length - 1].toUpperCase());

let recenica = 'Danas je lep dan';
console.log(recenica.indexOf("Danas")); 
console.log(recenica.indexOf('an'));
console.log(recenica.indexOf('an', 4)); 
console.log(recenica.indexOf('noc')); 

let target = 'an';
let position = 0;
let counter = 0;

while (true) {
    let pronadjenaPozicija = recenica.indexOf(target, position);
    if (pronadjenaPozicija == -1) break;
    position = pronadjenaPozicija + 1; 
    counter++;
}

console.log(`Pronadjen substring 'an' u recenici 'Danas je lep dan' ${counter} puta`);

let recenica2 = 'Danas je suncan dan';
target = 'an';
position = -1;
counter = 0;

while ((position = recenica2.indexOf(target, position + 1)) != -1) {
    counter++;
    console.log(`Pronadjen substring 'an' u recenici 'Danas je suncan dan' na ${position} poziciji`);
}

console.log(`Substring 'an' u recenici 'Danas je suncan dan' pronadjen ${counter} puta`);
if (recenica2.indexOf('suncan') != -1) {
    console.log('Substring je pronadjen!');
}

console.log(recenica2.lastIndexOf('suncan'));

console.log(recenica2.includes('Danas'));
console.log(recenica2.startsWith('Danas'));
console.log(recenica2.endsWith('suncan'));
console.log(recenica2.endsWith('dan '));

let nekiString = "Dobar dan";
console.log(nekiString.slice(0, 5)); 
console.log(nekiString.slice(0, 1)); 
console.log(nekiString.slice(1)); 
console.log(nekiString.slice(-5, -2)); 

console.log(nekiString.substring(0, 5)); 
console.log(nekiString.substring(0, 1)); 
console.log(nekiString.substring(5, 0)); 
console.log(nekiString.substring(1, 0)); 

console.log(nekiString.substr(0, 5)); 
console.log(nekiString.substr(6, 2)); 
console.log(nekiString.substr(-5, 2)); 

let strForTrim = "   Neki string   ";
console.log(strForTrim); 
console.log(strForTrim.trim());

