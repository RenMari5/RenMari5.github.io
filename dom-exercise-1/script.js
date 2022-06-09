// // // DOM Exercises
// // // DOM EXERCISE 1
// // // Skills: DOM

// // // Start with this HTML…
// // // <ul></ul>

// // // Create and link a JavaScript file. You are given some names of different fruit and an unordered list HTML element; add a list item for each of the fruit names to the unordered list.

// // // const fruitList = ['apple', 'banana', 'tomato' ];

// // // Use the forEach method to add the fruit names from the array to the unordered list

// // // Helpfull Links
// // // Document.querySelector()
// // // Document.createElement()
// // // Node.appendChild()
// // // Array.prototype.forEach()

// // const fruitList = ["apple", "banana", "tomato"];

// // const list = document.querySelector("ul");

// // fruitList.forEach((fruit) => {
// //   const listItem = document.createElement("li");
// //   const listItemText = document.createTextNode(fruit);
// //   listItem.appendChild(listItemText);
// //   list.appendChild(listItem);
// // });
// // // come back later and re-check

// // // DOM EXERCISE 2
// // // Skills: DOM

// // // Start with this HTML…
// // // <form id="form">
// // //   First name: <input type="text" name="firstName"><br>
// // //   Last name: <input type="text" name="lastName"><br>
// // //   <input type="submit" value="Submit">
// // // </form>

// // // Part 1:
// // // Add a submit event listener to the form element. When the form is submitted print the firstName value and the lastName value to the console.

// // const form = document.getElementById("form");

// // form.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   const data = new FormData(form);
// //   let firstName = data.get("First name");
// //   let lastName = data.get("Last name");
// //   //   console.log(firstName);
// //   //   console.log(lastName);
// //   if ((firstName === "Jane" || firstName === "John") && lastName === "Doe") {
// //     const paragraph = document.createElement("p");
// //     paragraph.innerText = `Yay ${firstName} ${lastName} has won an award!!!`;
// //     document.body.appendChild(paragraph);
// //     if (firstName === "John") {
// //       paragraph.style.color = "blue";
// //     } else {
// //       paragraph.style.color = "red";
// //     }
// //   }
// // });
// // come back later and re-check

// // Part 2:
// // When the form is submitted, if the first name value is equal to Jane or John and the last name is equal to Doe, Add a paragraph element to the body element of the page that has the text of “Yay {firstName} {lastName} has won an award!!!”. The text of the paragraph should be blue for John Doe and red for Jane Doe respectively.

// // To-Do List
// const toDoListArray = [];

// const form = document.querySelector("#form");
// const toDoList = document.querySelector(".to-do-list");

// form.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const toDoInput = document.querySelector(".to-do-input");
//   addToDoToArray(toDoInput.value);
//   // const toDoItem = document.createElement("li"); <--- this was refactored below
//   // toDoItem.innerText = toDoInputValue;
//   // toDoListArray.forEach((toDoItem) => {
//   //   const toDoListItemElement = createToDoItem(toDoItem.text);
//   //   toDoList.appendChild(toDoListItemElement);
//   // });
//   // const toDoItem = createToDoItem(toDoInput.value);
//   // toDoList.appendChild(toDoItem);
//   // console.log(toDoInputValue);
//   toDoInput.value = "";
// }

// function createToDoItem(toDoValue) {
//   const toDoItem = document.createElement("li");
//   toDoItem.className = "to-do-item";
//   toDoItem.innerText = toDoValue;
//   const deleteButton = document.createElement("button");
//   deleteButton.className = "delete-btn";
//   deleteButton.innerText = "Delete";
//   toDoItem.appendChild(deleteButton);
//   return toDoItem;
// }

// function addToDoToArray(toDoValue) {
//   const toDo = {
//     id: randomId(),
//     text: toDoValue,
//     completed: false,
//   };

//   toDoListArray.push(toDo);
//   const toDoListItemElement = createToDoItem(toDoItem.text);
//   toDoList.appendChild(toDoListItemElement);
//   console.log(toDoListArray);
// }

// function randomId() {
//   const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
//   return uint32.toString(16);
// }

// --- updated code from here ---

// Our todo list Array.
// const todoListArray = [];

const form = document.querySelector("#form");
const todoList = document.querySelector(".todo-list");

// Add an event listener to the form element.
form.addEventListener("submit", handleFormSubmit);

// The form submit event handler function for when the user submits a new todo.
function handleFormSubmit(event) {
  // Prevent the default behavior of refreshing the page when the form is submitted.
  event.preventDefault();
  const todoInput = document.querySelector(".todo-input");
  // Add the todo to the todoListArray and to the DOM.
  addTodoToList(todoInput.value); // Passing the value from the todo input field as an argument to the addTodoToArray function.
  // Clear the todo list form when the form is submitted.
  todoInput.value = "";
}

// Function to create a new todo list item element The function takes in todo object as an argument.
function createTodoItem(todo) {
  const todoItem = document.createElement("li");
  // Assigning a class name to the created todo item li element.
  todoItem.className = "todo-item";
  // Assigning a id to the created todo item li element. The id comes from the todo object paramater of our function.
  todoItem.id = todo.id;
  // Setting the inner text oif the todo item.
  todoItem.innerText = todo.text;
  // Creating our delete button for the todo item.
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.className = "delete-btn";
  // Appending the delete button to the todo item element.
  todoItem.appendChild(deleteButton);
  // Adding an event listener to the delete button.
  deleteButton.addEventListener("click", handleDeleteTodo);
  // returning our todoItem element.
  return todoItem;
}

// Function to add our new todo to the todoListArray and the todo list ul element.
function addTodoToList(todoValue) {
  // Creating a todo object from our todo value paramater.
  const todo = {
    id: randomId(),
    text: todoValue,
    completed: false,
  };
  // Creating a new todo item element using the createTodoItem function.
  const todoItemListElement = createTodoItem(todo);
  // Adding the todo item li element to the todo list ul element.
  todoList.appendChild(todoItemListElement);
}

// The delete todo event handler function for when the user deletes a todo.
function handleDeleteTodo(event) {
  // Get the parent element of the delete button. This the li element that the button is in.
  const todoListItem = event.target.parentElement;
  // Remove the todo list item from the DOM
  todoListItem.remove();
}

function randomId() {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}
