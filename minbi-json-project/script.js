// // Fetch requests
// fetch('https://grandcircusco.github.io/demo-apis/wrong.json')
//   // Promise is resolved
//   .then((res) => res.json()) // Getting json response from the Response object
//   .then((jsonData) => console.log(jsonData))
//   // Promise is rejected
//   .catch((error) => console.log(error));

// // Async function
// async function fetcher() {
//   const promise = await fetch(
//     'https://grandcircusco.github.io/demo-apis/donuts.json'
//   );
//   const response = await promise.json(); // Getting json response from the Response object
//   return response;
// }

// const displayData = async () => {
//   const data = await fetcher();
//   console.log(data);
// };

// displayData();

// HTTP Methods
// GET - fetch or retrieve data
// POST - Create new data
// PUT - Replace current data with new data
// DELETE - Delete data
// PATCH - Update or partially modify data

// Fetch requests
fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
  // Promise is resolved
  .then((res) => res.json()) // Getting json response from the Response object
  .then((jsonData) => {
    // Create a ul element
    const donutList = document.createElement("ul");
    // console.log(jsonData.results);

    jsonData.results.forEach((donut) => {
      // Create an li element
      const li = document.createElement("li");
      // Set the inner text of the li
      li.innerText = donut.name;
      // Append the li elements to our donut list ul
      donutList.appendChild(li);
    });

    document.body.appendChild(donutList);
  })
  // Promise is rejected
  .catch((error) => console.log(error));

fetch("https://swapi.dev/api/people", {
  // Fetch request configuration options.
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// GET request to the json place holder api to get the posts from the database.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    // Create a ul element
    const list = document.createElement("ul");

    data.forEach((post) => {
      // Create an li element
      const li = document.createElement("li");
      // Set the inner text of the li
      li.innerText = post.title;
      // Append the li elements to our list ul
      list.appendChild(li);
    });

    document.body.appendChild(list);
  });

document.querySelector("form").addEventListener("submit", (event) => {
  // Prevent form from refreshing the page.
  event.preventDefault();

  const inputValue = document.querySelector("input").value;
  submitPost(inputValue);
});

// Request to add a new post
function submitPost(postTitle) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      // Converting our body object into JSON object string
      title: postTitle,
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Returned from POST request: ", data);
      // Create a new li element
      const li = document.createElement("li");
      // Set the inner text of the new li element
      li.innerText = data.title;
      // Prepend the li to the ul element
      document.querySelector("ul").prepend(li);
    });
}
