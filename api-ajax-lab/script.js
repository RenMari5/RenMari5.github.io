let postContainer = document.createElement("div");

const responses = [];

fetch("https://www.reddit.com/r/aww.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
