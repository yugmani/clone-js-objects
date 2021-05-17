// SHALLOW COPY

//Primitive Values
let name = 'Silvia';
let name2 = name;
console.log('name:', name);
console.log('name2:', name2);

name = 'Luigi';

console.log('name:', name);
console.log('name2:', name2);

//Values by reference

//ARRAYS

// 1.
const party = ['Silvia', 'Luigi', 'Alex'];
const party2 = party;
console.log('party:', party);
console.log('party2:', party2);

// 2.
// party2[2] = 'Angelo';
// console.log('party:', party);
// console.log('party2:', party2);

// 3.
// const party2 = party.slice();
// party2[2] = 'Anna';
// console.log('party:', party);
// console.log('party2:', party2);

//OBJECTS

// 1.
const groups = {
  name: 'Silvia',
  surname: 'White'
};

//Exact copies
// const groups2 = groups;
// console.log('groups:', groups);
// console.log('groups2:', groups2);

//2.
// groups2.surname = 'Green';
// console.log('groups:', groups);
// console.log('groups2:', groups2);

//3
// Cloning of objects at first level
const groups2 = Object.assign({}, groups);
groups2.surname = 'Blue';
console.log('groups:', groups);
console.log('groups2:', groups2);
