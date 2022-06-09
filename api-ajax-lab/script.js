fetch("https://www.reddit.com/r/aww.json")
  .then((res) => res.json())
  .then((data) => data.data.children.map((data) => data.data))
  .catch((error) => console.log(error));
