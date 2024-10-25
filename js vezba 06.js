let user1 = {}; 
let user2 = new Object(); 

let person = {
    firstName: 'Marko',
    lastName: 'Markovic',
    age: 20,
    isAdult: true,
    'is student': true
};

console.log(person.firstName);
console.log(person['age']);
console.log(person['is student']);

person.newValue = 'Nova vrednost';
console.log(person);
delete person.newValue;
console.log(person);
delete person['is student'];
console.log(person);

const ana = {
    firstName: 'Ana',
    lastName: 'Anic',
    age: 40,
    yearStartProgramming: 1998,
    isJavaScriptProgrammer: true,
    languages: ['php', 'JavaScript', 'C#'],
    
    calc: function() {
        this.ageOfProgramming = 2021 - this.yearStartProgramming;
        return this.ageOfProgramming;
    }
};

console.log(ana);
console.log(ana.firstName);
console.log(ana['firstName']);

const key = 'Name';
console.log(ana['first' + key]);
console.log(ana['last' + key]);

ana.location = 'Srbija';
console.log(ana);
console.log(ana.calc());
console.log('. ........');
console.log(ana);
console.log(ana.languages[1]);

for (let key in ana) {
    console.log(`${key} ima vrednost ${ana[key]}`);
}
