// #01
let ana = {
    firstName: 'Ana',
    lastName: 'Petrovic',
    age: 30,
    languages: ['JavaScript', 'C#', 'Ruby'],
    ageOfProgramming: 10
};

console.log(`${ana.firstName} ${ana.lastName} ima ${ana.age} godina i zna ${ana.languages.length} programska jezika. Programira vec ${ana.ageOfProgramming} godine.`);

// #02
let example = {
    example1: 'value1',
    example2: 'value2',
    example3: 'value3'
};

console.log("Lista svojstava objekta example su:");
for (let key in example) {
    console.log(`* ${key}`);
}

// #03
delete example.example3;
console.log(example);

// #04
example['novi primer'] = 'nova vrednost';
console.log(example);

// #05
example.getValues = function() {
    let values = [];
    for (let key in example) {
        values.push(example[key]);
    }
    return values;
};

// #06
console.log(example.getValues());

// #07
Object.size = function(obj) {
    let counter = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) counter++;
    }
    return counter;
};

console.log(Object.size(example));
console.log(Object.size(ana));
console.log(ana);
                    