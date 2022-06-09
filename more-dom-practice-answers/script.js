//Question 1

const question1Text = document.getElementById("question-1");

question1Text.style.color = "blue";

//question 2

const question2Text = document.querySelector(".question-2");

question2Text.style.color = "red";

//question 3

const question3elements = document.querySelectorAll(".question-3");
question3elements.forEach((element) => {
  element.classList.add("orangeFont");
});

//question 4

const question4Parent = document.getElementById("question-4").parentNode;

question4Parent.classList.add("purpleBackground");

//question 5

const question5button = document.getElementById("alert-button");

question5button.addEventListener("click", () => {
  window.alert("Question 5 button pressed!");
});

//question 6

const question6Button = document.getElementById("add-tv-show-button");

question6Button.addEventListener("click", () => {
  const tvShowParentList = document.getElementById("tv-shows");

  const show = document.createElement("li");
  show.innerText = "Our Flag Means Death";
  tvShowParentList.append(show);
});

//question 7

const question7RemoveButton = document.getElementById(
  "question-7-remove-button"
);

question7RemoveButton.addEventListener("click", () => {
  const commentToRemove = document.getElementById("comment-7");

  commentToRemove.remove();
});

//question 8

const question8Button = document.getElementById("question-8-remove-button");

question8Button.addEventListener("click", () => {
  const elementToRemove = question8Button.parentElement;

  elementToRemove.remove();
});

//question 9 And 10

const textToHighlight = document.querySelectorAll(".highlight");

textToHighlight.forEach((text) => {
  text.addEventListener("mouseover", (event) => {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "yellow";
  });

  text.addEventListener("mouseleave", (event) => {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "white";
  });
});

//question 11

const question11PTag = document.getElementById("question-11");

console.log(question11PTag.innerText);

//question 12
const question12Input = document.getElementById("question-12-name");

const question12Button = document.getElementById("say-hello");

question12Button.addEventListener("click", () => {
  const question12Message = document.getElementById("message");

  return (question12Message.innerText = `Hello ${question12Input.value}`);
});

//QUESTION 13
const question13Input = document.getElementById("question-13-name");
const question13Button = document.getElementById("add-user");

question13Button.addEventListener("click", () => {
  const nameList = document.getElementById("users");

  const newUser = document.createElement("li");
  newUser.innerText = question13Input.value;
  nameList.append(newUser);
});

//question 14

const showButton = document.getElementById("show-button");
const hideButton = document.getElementById("hide-button");
const secretText = document.getElementById("secret-text");

showButton.addEventListener("click", () => {
  secretText.classList.remove("hidden");
});

hideButton.addEventListener("click", () => {
  secretText.classList.add("hidden");
});

//question 15

const question15InputX = document.getElementById("question-15-x");
const question15InputY = document.getElementById("question-15-y");
const addButton = document.getElementById("add-calc-button");

const answer = document.getElementById("question-15-answer");

addButton.addEventListener("click", () => {
  answer.innerText = +question15InputX.value + +question15InputY.value;
});

//question 16

const question16InputX = document.getElementById("question-16-x");
const question16InputY = document.getElementById("question-16-y");
const addButtonQuestion16 = document.getElementById("calc-button");
const operator = document.getElementById("operator");

const answerFor16 = document.getElementById("question-16-answer");

addButtonQuestion16.addEventListener("click", () => {
  let x = +question16InputX.value;
  let y = +question16InputY.value;

  if (operator.value === "+") {
    return (answerFor16.innerText = x + y);
  } else if (operator.value === "-") {
    return (answerFor16.innerText = x - y);
  } else if (operator.value === "*") {
    return (answerFor16.innerText = x * y);
  }

  return (answerFor16.innerText = x / y);
});
