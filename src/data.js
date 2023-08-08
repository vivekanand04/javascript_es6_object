const animals = [
  { name: "catt", sound: "meow", khanapina: { food: 2, water: 3 } },
  { name: "dog", sound: "woof" }
];

function saveAnimal(k) {
  return [
    k.name,
    function () {
      console.log(k.sound);
    }
  ];
}
export default animals;
export { saveAnimal };
