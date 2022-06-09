const firstQuestion = document.getElementById("question-1");
firstQuestion.style.color = "blue";

const secondQuestion = document.querySelector(".question-2");
secondQuestion.style.color = "red";

// function changeToOrange() {
//   const thirdQuestion = document.getElementsByClassName("question-3"); // returns an array of elements
//   thirdQuestion.forEach((item) => {
//     item.classList.add("orange");
//   });
// }

// changeToOrange();

const thirdQuestion = document.querySelectorAll(".question-3"); // returns an array
thirdQuestion.forEach((element) => element.classList.add("orange"));

const questionFour = document.querySelector("#question-4"); // method
const questionFourParentElement = questionFour.parentElement;
// console.log(questionFourParentElement);
questionFourParentElement.classList.add("purple");

let alertButton = document.getElementById("alert-button");
alertButton.addEventListener("click", () => {
  window.alert("Hello!");
});

// Question 6
let addToShowListButton = document.getElementById("add-tv-show-button");
addToShowListButton.addEventListener("click", () => {
  let makeANewListItem = document.createElement("li");
  let showList = document.getElementById("tv-shows");

  makeANewListItem.innerText = "How I Met Your Mother";
  showList.appendChild(makeANewListItem);
});

let questionSeven = document.getElementById("question-7-remove-button");
questionSeven.addEventListener("click", () => {
  let hiddenComment = document.getElementById("comment-7");
  hiddenComment.classList.add("hidden");
});

const questionEight = document.getElementById("question-8-remove-button");
questionEight.addEventListener("click", () => {
  let hiddenComment2 = document.getElementById("delete-comment");
  hiddenComment2.classList.add("hidden");
});

// const ninthQuestion = document.querySelectorAll(".highlight");

const ninthTenthQuestion = document.getElementsByClassName("highlight");

function highlightText(ninthTenthQuestion) {
  ninthTenthQuestion.addEventListener("mouseover", () => {
    ninthTenthQuestion.forEach((element) =>
      element.classList.add("highlighter")
    );
  });
  ninthTenthQuestion.addEventListener("mouseleave", () => {
    ninthTenthQuestion.forEach((element) =>
      element.classList.remove("highlighter")
    );
  });
}
// 10 is refactoring 9 to support multiple highlights... but come back later

// Question 11

// Question 12

// Question 13

// Question 14

// Question 15

// Question 16
