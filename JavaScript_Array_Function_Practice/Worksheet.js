const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const getAllNames = characters.map( (charecter) => charecter.name);
//console.log(getAllNames);
//console.log (typeof getAllNames);
//2. Get array of all heights
const getAllHeights = characters.map( (charecter) => charecter.height) 
//console.log(getAllHeights);
//3. Get array of objects with just name and height properties
const transformCharacters = characters.map( (character) => ({
    name: character.name, 
    height: character.height
}));
//console.log(transformCharacters);
//4. Get array of all first names
const getAllFirstNames = characters.map( (charecter) => charecter.name.split(" ")[0]); 
//console.log(getAllFirstNames);
//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
const charMassGreater100 = characters.filter(character => character.mass > 100);
// console.log (charMassGreater100);
// console.log (typeof charMassGreater100); 
//2. Get characters with height less than 200
const charHeightLess200 = characters.filter(character => character.height < 200)
// console.log(charHeightLess200);

//3. Get all male characters
const maleOnlyCharecter = characters.filter(character => character.gender ==="male");
//console.log(maleOnlyCharecter);
//4. Get all female characters
const femaleOnlyCharecter = characters.filter(character => character.gender ==="female");
//console.log(femaleOnlyCharecter);

//***SORT***
//1. Sort by mass
const sortedByMass = characters.sort( (a,b) => {
    return a.mass - b.mass;
});
//console.log(sortedByMass);
//2. Sort by height
const sortedByheight = characters.sort( (a,b) => {
    return b.height - a.height;
});
//console.log(sortedByheight);
//3. Sort by name
const byName = characters.sort( (a,b) => {
    if(a.name < b.name) return -1;
    return 1;
});
//console.log(byName);
//4. Sort by gender
const byGender = characters.sort( (a,b) => {
    if(a.gender === 'male') return -1;
    //return 1;
});
console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
