const container = document.getElementById("post-container");

const postArray = [];

fetch("https://www.reddit.com/r/aww/.json")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    let jsonResults = myJson.data.children;
    console.log(jsonResults);
    jsonResults.forEach((post) => {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let image = document.createElement("img");
      let a = document.createElement("a");
      let linkText = document.createTextNode("View Post");
      image.src = post.data.thumbnail;
      h3.innerText = post.data.title;
      a.href = `https://www.reddit.com/${post.data.permalink}`;
      // linkText.setAttribute(
      //   "href",
      //   `https://www.reddit.com/${post.data.permalink}`
      // );
      div.appendChild(image);
      div.appendChild(h3);
      a.appendChild(linkText);
      div.appendChild(a);
      div.classList.add("posts");
      container.appendChild(div);
      console.log(a);
    });
  });
