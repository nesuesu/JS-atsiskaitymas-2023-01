/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

let getUserAverageAge = (masyvas) => {
  let ages = [];
    masyvas.forEach(element => {
      ages.push(element.age);
    });
  let vidurkis = (ages.reduce((acc,val) => acc + val)/ages.length).toFixed(2);
  return vidurkis;
}


console.log("Vartotojų amžiaus vidurkis:", getUserAverageAge(users));




let getUserAverageAge1 = (masyvas) => {

  return (masyvas.map(element => element.age).reduce((acc,val) => acc + val)/masyvas.length).toFixed(2);
}

console.log("Vartotojų amžiaus vidurkis:", getUserAverageAge1(users));




let getUsersNames = (masyvas) => {
  return masyvas.map(element => element.name);
}

console.log("Vartotojų vardai:", getUsersNames(users));
