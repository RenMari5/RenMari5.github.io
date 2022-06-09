let characters = ["Leon", "Jill", "Sebastian", "Link", "Zelda", "Ignis"];

function randomize(array) {
  let randoArray = array.sort((a, b) => 0.5 - Math.random());
  console.log(randoArray);
  return randoArray;
}

randomize(characters);
