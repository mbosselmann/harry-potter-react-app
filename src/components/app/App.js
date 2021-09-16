// import logo from "./logo.svg";
import "./App.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Card from "../card/Card";
import { useState } from "react";

function App({ data }) {
  const [activeHouse, setActiveHouse] = useState("");
  function handleHouseButtonClick(house) {
    setActiveHouse(house);
  }

  const filteredData = data.filter((character) => {
    return character.house === activeHouse || activeHouse === "";
  });

  return (
    <div className="App">
      <Header />
      <main className="main">
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
          />
        ))}
      </main>
      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </div>
  );
}

export default App;
