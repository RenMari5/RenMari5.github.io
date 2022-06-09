//I get the <ul> that I will be putting my coins into.
const coinCollection = document.getElementById("coin-collection");

const makeMoneyButton = document.getElementById("make-money-button");

makeMoneyButton.addEventListener("click", handleCoinCreation);

//this is for the money total challenge
let total = 0;
const totalElement = document.getElementById("total");

function handleCoinCreation(event) {
  //we prevent default on the submit button so the page doesn't reload every time we click it and remove our coins.
  event.preventDefault();

  let howManyCoinsValue = document.getElementById("how-many").value;
  let coinSelectorValue = document.getElementById("coin-select").childNodes;

  coinSelectorValue.forEach((node) => {
    if (node.type === "radio") {
      //for radio and checkboxes they have a checked property that returns a boolean.
      if (node.checked) {
        //I loop through the amount of coins that were specified, and every loop I create a coin with these on it.
        for (let i = 0; i < howManyCoinsValue; i++) {
          let coin = document.createElement("li");
          coin.classList.add("coin", `${node.value}`);
          coin.innerText = `${node.value}`;

          //calls a function below to add to the total the amount of the coin every time a coin is added.
          addToTotal(node.value);

          //I add an event listener to the coin WHEN it is made. This will help me target this specific coin without having to do anything extra.
          coin.addEventListener("click", deleteCoinHandler);

          coinCollection.appendChild(coin);

          //have to round total using toFixed. It'll round to 2 decimal places. MAth.Round takes a bit more to make it work the way we want.
          totalElement.innerText = `Total: ${total.toFixed(2)}`;
        }
      }
    }
  });
}

function deleteCoinHandler(event) {
  //event.target is self-explanatory. It is whatever was targeted by the event. In this case, the coin that was clicked is the target.
  let coinType = event.target.classList;
  // let coinValue = coinType.forEach(style => style !== 'coin')

  //this may be a little better than for each as when the coin is made it will always be in position 1. Foreach won't work for more than 2 classes
  let coinValue = coinType[1];

  //calls a function below that takes this specific coin value and removes it from the running total. Literally just the opposite of the addToTotal
  removeFromTotal(coinValue);

  //Actually removing the coin.
  event.target.remove();
  //setting the new total upon removal much like above.
  totalElement.innerText = `Total: ${total.toFixed(2)}`;
}

function addToTotal(coinValue) {
  if (coinValue === "penny") {
    return (total += 0.01);
  } else if (coinValue === "nickel") {
    return (total += 0.05);
  } else if (coinValue === "dime") {
    return (total += 0.1);
  }

  return (total += 0.25);
}

function removeFromTotal(coinValue) {
  if (coinValue === "penny") {
    return (total -= 0.01);
  } else if (coinValue === "nickel") {
    return (total -= 0.05);
  } else if (coinValue === "dime") {
    return (total -= 0.1);
  }

  return (total -= 0.25);
}
