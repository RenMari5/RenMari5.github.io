let clickMeButton = document.getElementById("click-me");
clickMeButton.addEventListener("click", () => {
  console.log("Clicked!");
  clickMeButton.style.color = "pink";
  clickMeButton.style.backgroundColor = "green";
  document.body.style.border = "3 px solid fuchsia";
  document.body.style.backgroundColor = "purple";
});

document.body.addEventListener("mousemove", (event) => {
  //   console.log(event);
  const circle = document.getElementById("circle");
  circle.style.left = `${event.pageX - 50}px`;
  circle.style.top = `${event.pageY - 50}px`;
});

console.log("Hi!");

// Events Exercise
// You need an HTML file with a CSS file (<link>) and a JavaScript file (<script>).
// In the HTML, add a button and an h1 to the HTML. Give them some text. You may give them ids and classes if you want.
// In the JavaScript file, handle a click event on the button. When the button is clicked, change the color of the h1 to Pink and change the background color to DimGray.
// In the JavaScript file, handle the click event on the page body. When the user clicks, find the clientX of the event and use it to set the text of the h1. e.g. "X = 123".
// Extended challenge 1: Add an image to the page <img src="https://placeimg.com/300/200/arch" alt="" />. Add two buttons that say "Animals" and "Nature". When the "Animals" button is clicked, change the image src to "https://placeimg.com/300/200/animals". When the "Nature" button is clicked, change the image src to "https://placeimg.com/300/200/nature". If you want to add more buttons, consider the options here: https://placeimg.com/.
// Extended challenge 2: when a letter on the keyboard is pressed, replace the h1 text with a message to indicate the key, e.g. "Key = D".

