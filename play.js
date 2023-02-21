//Multiplay with using arrow Function;
const multiplay = (a, b) => {
  return console.log(a * b);
};
multiplay(5, 6);

//Playing With Objects In JS
const person = {
  name: "Priyansh Rai",
  age: 24,
};
//Normally calling Object Data;

const printName = (personData) => {
  console.log(personData.name);
};
printName(person);

//Data Call Using Destructuring;

const printName1 = ({ name }) => {
  console.log(name);
};
printName1(person);

