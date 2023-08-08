import animals, { saveAnimal } from "./data";

console.log(animals); //console me array ka element print hua hai matlab pura array hi import hua hai
//destructure of array
const [element1, element2] = animals;
console.log(element1); //ye array"animals" ke pahla element ko console me print karega

//{// method 1:destructure of first object of array
// // const{name,sound}=element1;//madam ne bataya ki yaha pe "name" and "sound" hi use karna padega
// // console.log(sound);
// // method 2:destructure of first object of array
// const{name:catname,sound:catsound}=element1;
// console.log(catsound);
// // method 3:destructure of first object of array
// const{name="abc",color="blue"}=element1;
// console.log(name);//does not replaced because pahle se thaa
// console.log(color);//pahle se aray me nahi tha color isliye yhi wala print hua hai
//}

//{// method 1: destructure third object of array
// const{name,sound,khanapina}=element1;
// console.log(khanapina.food);

// method 2: destructure third object of array
// const{name,sound,khanapina:{food, water}}=element1;
// console.log(food);
//}

//play with saveAnimal function
console.log(saveAnimal(element1));
//destructure saveAnimal function
const [ele1, ele2] = saveAnimal(element1);
console.log(ele1); //method 1 for printing element in console
ele2(); //method 2 for printing element in console

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
