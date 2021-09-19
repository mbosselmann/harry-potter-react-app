// import logo from "./logo.svg";
import "./App.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Card from "../card/Card";
import { useState } from "react";
import Title from "../title/Title";

function App({ data }) {
  const [activeHouse, setActiveHouse] = useState(() => {
    if (localStorage.getItem("activeHouseLocalStorage")) {
      return JSON.parse(localStorage.getItem("activeHouseLocalStorage"));
    } else {
      return "All";
    }
  });

  const [showTargets, setShowTargets] = useState(false);

  function showTargetsClickButton() {
    setShowTargets(true);
  }

  function handleHouseButtonClick(newActiveHouse) {
    setShowTargets(false);
    setActiveHouse(newActiveHouse);
    localStorage.setItem(
      "activeHouseLocalStorage",
      JSON.stringify(newActiveHouse)
    );
  }

  const [targets, setTargets] = useState(() => {
    if (localStorage.getItem("targetLocalStorage")) {
      return JSON.parse(localStorage.getItem("targetLocalStorage"));
    } else {
      return [];
    }
  });

  function handleTargetButtonClick(characterName) {
    const isTarget = targets.includes(characterName);

    let newTargets;
    if (isTarget) {
      newTargets = targets.filter((item) => {
        if (item === characterName) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      newTargets = targets.concat(characterName);
    }

    setTargets(newTargets);
    localStorage.setItem("targetLocalStorage", JSON.stringify(newTargets));
  }

  const filteredData = data.filter((character) => {
    if (showTargets) {
      return targets.includes(character.name);
    } else {
      return character.house === activeHouse || activeHouse === "All";
    }
  });

  return (
    <div className="App">
      <Header activeHouse={activeHouse} />
      <main className="main">
        {!showTargets && (
          <Title activeHouse={activeHouse} filteredData={filteredData} />
        )}
        {filteredData.map((character) => (
          <Card
            characterName={character.name}
            gender={character.gender}
            birthday={character.dateOfBirth}
            patronus={character.patronus}
            wandWood={character.wand.wood}
            wandCore={character.wand.core}
            wandLength={character.wand.length}
            hogwartsHouse={character.house}
            imageURL={character.image}
            alive={character.alive}
            key={character.name}
            onTargetButtonClick={handleTargetButtonClick}
            isTarget={targets.indexOf(character.name) > -1}
          />
        ))}
      </main>
      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
        onShowTargetsButtonClick={showTargetsClickButton}
      />
    </div>
  );
}

export default App;
