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

// Fetch requests
// fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
//   // Promise is resolved
//   .then((res) => res.json()) // Getting json response from the Response object
//   .then((jsonData) => {
//     // Create a ul element
//     const donutList = document.createElement("ul");
//     // console.log(jsonData.results);

//     jsonData.results.forEach((donut) => {
//       // Create an li element
//       const li = document.createElement("li");
//       // Set the inner text of the li
//       li.innerText = donut.name;
//       // Append the li elements to our donut list ul
//       donutList.appendChild(li);
//     });

//     document.body.appendChild(donutList);
//   })
//   // Promise is rejected
//   .catch((error) => console.log(error));

// fetch("https://swapi.dev/api/people", {
//   // Fetch request configuration options.
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// // Making a POST request to the json place holder api to add a new post to the database.
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     // Create a ul element
//     const list = document.createElement("ul");

//     data.forEach((post) => {
//       // Create an li element
//       const li = document.createElement("li");
//       // Set the inner text of the li
//       li.innerText = post.title;
//       // Append the li elements to our list ul
//       list.appendChild(li);
//     });

//     document.body.appendChild(list);
//   });

// document.querySelector("form").addEventListener("submit", (event) => {
//   // Prevent form from refreshing the page.
//   event.preventDefault();

//   const inputValue = document.querySelector("input").value;
//   submitPost(inputValue);
// });

// // Request to add a new post
// function submitPost(postTitle) {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       // Converting our body object into JSON object string
//       title: postTitle,
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("Returned from POST request: ", data);
//       // Create a new li element
//       const li = document.createElement("li");
//       // Set the inner text of the new li element
//       li.innerText = data.title;
//       // Prepend the li to the ul element
//       document.querySelector("ul").prepend(li);
//     });
// }

// Extra Practice with The Net Ninja YouTube Videos

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("callback function fired");
// }, 2000);

// console.log(3);
// console.log(4);

const getTodos = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("luigi.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodos("mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos("shaun.json");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

// Meet Callback Hell: looks ugly and becomes impossible to maintain
getTodos("luigi.json", (err, data) => {
  console.log(data);
  getTodos("mario.json", (err, data) => {
    console.log(data);
    getTodos("shaun.json", (err, data) => {
      console.log(data);
    });
  });
});

// Promise Example

const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something
    resolve("some data");
    // reject("some error");
  });
};

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// fetch API

fetch("luigi.json")
  .then((response) => {
    console.log("resolved", response);
    // works like .parse (returns a promise)
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    // only happens during a network error of some kind
    console.log("rejected", err);
  });
