// Primer 1
let niz1 = [];
for (let i = 0; i < 5; i++) {
    niz1.push(i);
}
console.log(niz1); // [0, 1, 2, 3, 4]

// Primer 2
let niz2 = [];
for (let i = 0; i < 10; i += 2) {
    niz2.push(i);
}
console.log(niz2); // [0, 2, 4, 6, 8]

// Primer 3
let niz3 = [];
for (let i = 10; i > 0; i -= 2) {
    niz3.push(i);
}
console.log(niz3); // [10, 8, 6, 4, 2]

// Primer 4
let niz4 = [10, 9, 8, 7, 6];
for (let i = 0; i < niz4.length; i++) {
    console.log(niz4[i]); // 10, 9, 8, 7, 6
}

// Primer 5
let niz5 = [
    [1, 2, 3], ['Petar', 'Petrovic'], ['Novi Sad', 42]
];
for (let i = 0; i < niz5.length; i++) {
    for (let j = 0; j < niz5[i].length; j++) {
        console.log(niz5[i][j]); // 1, 2, 3, Petar, Petrovic, Novi Sad, 42
    }
}

// Primer 6
let ourArray = [];
let i = 0;
while (i < 5) {
    ourArray.push(i);
    i++;
}
console.log(ourArray); // [0, 1, 2, 3, 4]

// Primer 7
let lastName = prompt('Kako se prezivas?');
console.log(lastName);

// Primer 8 (Switch)
let job = prompt('Čime se Petar bavi ?');
switch (job) {
    case 'programer':
        console.log('Petar je programer.');
        break;
    case 'nastavnik':
        console.log('Petar je nastavnik.');
        break;
    case 'dizajner':
        console.log('Petar je dizajner.');
        break;
    case 'lekar':
        console.log('Petar je lekar.');
        break;
    default:
        console.log('Petar je,...hm....stvarno nisam sigurna');
}

// Primer 9 (if...else)
let brojGodinaPera = 15;
let brojGodinaMika = 14;
let brojGodinaLaza = 13;
let sklekoviPera = 12;
let sklekoviMika = 13;
let sklekoviLaza = 11;
let bodoviPera = brojGodinaPera + 5 * sklekoviPera;
let bodoviMika = brojGodinaMika + 5 * sklekoviMika;
let bodoviLaza = brojGodinaLaza + 5 * sklekoviLaza;

if (bodoviPera > bodoviMika && bodoviPera > bodoviLaza) {
    console.log('Pera je pobednik sa ukupno ' + bodoviPera + ' bodova!');
} else if (bodoviMika > bodoviPera && bodoviMika > bodoviLaza) {
    console.log('Mika je pobednik sa ukupno ' + bodoviMika + ' bodova!');
} else if (bodoviLaza > bodoviPera && bodoviLaza > bodoviMika) {
    console.log('Laza je pobednik sa ukupno ' + bodoviLaza + ' bodova!');
} else {
    console.log('Bravo za sve!');
}

// Primer 10 (Pristupanje elementima niza)
let names = ['Mika', 'Pera', 'Laza'];
let years = new Array(2004, 2005, 2006);
console.log(years); // [2004, 2005, 2006]
console.log(years[0]); // 2004
console.log(years[1]); // 2005
console.log(years[2]); // 2006

let petar = ['Petar', 'Petrovic'];
console.log(petar); // ['Petar', 'Petrovic']
petar.push(2005);
console.log(petar); // ['Petar', 'Petrovic', 2005]

// Primer 11
let years1 = [2005, 2011, 2014];
let ages = [];
let seniorDeveloper = [];

function printSeniorDeveloper(years) {
    for (let i = 0; i < years.length; i++) {
        ages[i] = 2017 - years[i];
    }
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 5) {
            console.log('Person ' + (i + 1) + ' is a senior programmer with ' + ages[i] + ' years of experience');
            seniorDeveloper[i] = true;
        } else {
            console.log('Person ' + (i + 1) + ' is not a senior programmer with ' + ages[i] + ' years of experience');
            seniorDeveloper[i] = false;
        }
    }
    return seniorDeveloper;
}

let isSenior = printSeniorDeveloper(years1);
console.log(isSenior); // [true, true, false]
