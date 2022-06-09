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
      let link = document.createElement("a");
      image.src = post.thumbnail;
      h3.innerText = post.title;
      link.src = post.permalink;
      div.appendChild(image);
      div.appendChild(h3);
      div.classList.add("posts");
      container.appendChild(div);
    });
  });
