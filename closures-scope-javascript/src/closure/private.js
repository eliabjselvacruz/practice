const person = () => {
  let saveName = "Name";
  return {
    getName: () => {return saveName;},
    setName: (newName) => {saveName = newName}
  };
}

let person1 = person();
console.log(person1.getName());
person1.setName("Eliab");
console.log(person1.getName());