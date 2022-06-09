let toDoList = [];

function randomId() {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}

// Unshift method
const addToDo = (toDo) => {
  toDoList.unshift(toDo);
};

addToDo({ text: "Complete lab 3", isCompleted: false, id: randomId() });
addToDo({ text: "Clean literbox", isCompleted: false, id: randomId() });
addToDo({ text: "Blah", isCompleted: false, id: randomId() });
addToDo({ text: "New ToDo", isCompleted: false, id: randomId() });
addToDo({ text: "New ToDo", isCompleted: false, id: randomId() });
addToDo({ text: "New ToDo", isCompleted: false, id: randomId() });
addToDo({ text: "New ToDo", isCompleted: false, id: randomId() });

// Filter method
const removeToDo = (id) => {
  const updatedToDoList = toDoList.filter((toDo) => toDo.id !== id);
  toDoList - updatedToDoList;
};

removeToDo();

const updateToDo = (id, toDoUpdateObject) => {
  //   const updateIndex = toDoList.findIndex(
  //     (currentToDo) => currentToDo.id === id
  //   );
  const updatedToDoList = toDoList.map((currentToDo) => {
    if (currentToDo.id === id) {
      return { ...currentToDo, ...toDoUpdateObject };
    }
  });
  //   toDoList.splice(updateIndex, 1, toDoUpdateObject); //tells the function to remove the object at the given index, and replace it with the new object

  toDoList = updatedToDoList;
  return toDoList;
};

// updateToDo('2', {id: '2', text: 'water the plants', isCompleted: false}); change whole object
// updateToDo('2', {text: 'Clean the litter box'}); change text only
// updateToDo('2', {isCompleted: true}); change only isCompleted

console.log(toDoList);

// ---------------------------

// 1. Create VendingMachine array
//     Every Item has a name, a code, a quantity, a price (give it 2 items to start)

let vendingMachine = [
  { name: "twix", code: "A320", quantity: 4, price: 6.5 },
  { name: "snickers", code: "B430", quantity: 2, price: 4.0 },
];

// 2. Add item to VendingMachine ( pass array a parameter, build item inside function) (think about what that means the parameters will be)

const addItem = (array, name, code, quantity, price) => {
  array.push({ name: name, code: code, quantity: quantity, price: price }); // can also be written shorthand: name, code, quantity, price
};

// 3. update quantity (by code)

const updateQuantity = (array, code, quantity) => {
  const updatedArray = array.map((currentObject) => {
    if (currentObject.code === code) {
      return { ...currentObject, quantity: quantity };
    }
    return currentObject; // telling the function not to touch the object if it doesn't match criteria
  });
  //   array = updatedArray; // telling the array to return the updated array
  return updatedArray;
};

vendingMachine = updateQuantity(vendingMachine, "A320", 2);

console.log(vendingMachine);

// 4. update price

// 5. remove item from stock (by code)

// 6. Report inventory (show all in stock)

// 7. Get Item from vendingMachine (for now do not worry about price, we can add that in later)

// extended challenges

// 8. Get item takes in money, checks to make sure it is the correct amount. If not console.log('Need the price of the item (as the specific item price), you only have money(value put into machine)) If it is the correct amount or more, return item and change

// 9. Get item reduces the amount of stock(what would you use that would keep you from writing it all out?)
