import { useState } from "react";
import "./Card.css";
import expandMore from "./expand-more.png";
import expandLess from "./expand-less.png";

function tellHouseColor(hogwartsHouse) {
  let houseColor;
  if (hogwartsHouse === "Gryffindor") {
    houseColor = "gryffindor";
  } else if (hogwartsHouse === "Ravenclaw") {
    houseColor = "ravenclaw";
  } else if (hogwartsHouse === "Hufflepuff") {
    houseColor = "hufflepuff";
  } else if (hogwartsHouse === "Slytherin") {
    houseColor = "slytherin";
  }
  return houseColor;
}

function Card(props) {
  const houseColor = tellHouseColor(props.hogwartsHouse);
  const [showDetails, setShowDetails] = useState(false);
  const [emoji, setEmoji] = useState("");

  return (
    <section className="section-card">
      <div className="section-header">
        <div>
          <img className="section-img" src={props.imageURL} alt="" />
        </div>
        <h2 className="section-header-title">
          {emoji}
          {props.characterName}
        </h2>
        <div className={houseColor}>{props.hogwartsHouse}</div>
        <button
          className={!showDetails ? "expand-more-button" : "expand-less-button"}
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          <img
            className="expand-more-img"
            src={!showDetails ? expandMore : expandLess}
            alt=""
          />
        </button>
      </div>
      {showDetails && (
        <div className="section-content">
          <div className="content-text">
            <ul className="main-info-list">
              <h3>Basics:</h3>
              <li>Gender: {props.gender}</li>
              <li>Birthday: {props.birthday}</li>
              <li>Patronus: {props.patronus}</li>
            </ul>
            <ul className="wand-list">
              <h3>Wand:</h3>
              <li>Wood: {props.wandWood}</li>
              <li>Core: {props.wandCore}</li>
              <li>Length: {props.wandLength}</li>
            </ul>
            {props.characterName === "Harry Potter" ? (
              <div className="emoji">⚡</div>
            ) : (
              <div></div>
            )}
            {props.characterName === "Hermione Granger" && (
              <div className="emoji">📚</div>
            )}
            {props.characterName === "Ron Weasley" && (
              <div className="emoji">🕸️</div>
            )}
            {props.characterName === "Minerva McGonagall" && (
              <div className="emoji">🐱</div>
            )}
            {props.characterName === "Severus Snape" && (
              <div className="emoji">🧪</div>
            )}
            {props.characterName === "Neville Longbottom" && (
              <div className="emoji">⚔️</div>
            )}
          </div>
          <div className="emoji-buttons">
            <button
              className="emoji-item"
              onClick={() => {
                setEmoji(!emoji ? "🔴  " : "");
              }}
            >
              Target 🔴
            </button>
            <button
              className="emoji-item"
              onClick={() => {
                setEmoji(!emoji ? "🔵  " : "");
              }}
            >
              Catched 🔵
            </button>
            <button
              className="emoji-item"
              onClick={() => {
                setEmoji(!emoji ? "🟣  " : "");
              }}
            >
              Dead 🟣
            </button>
            <button
              className="emoji-item"
              onClick={() => {
                setEmoji(!emoji ? "🟢  " : "");
              }}
            >
              Ally 🟢
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Card;
