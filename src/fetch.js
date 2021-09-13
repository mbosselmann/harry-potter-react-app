import Card from "./components/card/Card";

export function fetchHarryPotterAPI() {
  fetch("https://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then(Card)
    .catch((error) => {
      console.log("Something went wrong.", error);
    });
}
