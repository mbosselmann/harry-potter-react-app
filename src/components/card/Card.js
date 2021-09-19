import { useState } from "react";
import "./Card.css";
import expandMore from "./expand-more.png";
import expandLess from "./expand-less.png";
import targetIMG from "./target-white.png";

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
    <section
      className={"section-card " + (props.isTarget ? "card-target" : "")}
    >
      <div className="section-header">
        <div>
          <img className="section-img" src={props.imageURL} alt="" />
        </div>
        <div className="section-name-and-house">
          <div className="section-section">
            <p className="section-header-title">{props.characterName}</p>
            <div className={houseColor}>{props.hogwartsHouse}</div>
          </div>
          {props.hogwartsHouse !== "Slytherin" && (
            <button
              className={
                props.isTarget
                  ? "next-target-button next-target-button--active"
                  : "next-target-button "
              }
              onClick={() => {
                props.onTargetButtonClick(props.characterName);
              }}
            >
              <img className="target-img" src={targetIMG} alt="target-button" />
            </button>
          )}
        </div>
        <button
          className={!showDetails ? "expand-more-button" : "expand-less-button"}
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          <img
            className="expand-more-img"
            src={!showDetails ? expandMore : expandLess}
            alt="show and hide details about the character"
          />
        </button>
      </div>
      {showDetails && (
        <div className="section-content">
          <div className="content-text">
            <div>
              <h3 className="content-title">Basics:</h3>
              <ul className="main-info-list">
                <li>Gender: {props.gender || "n/a"}</li>
                <li>Birthday: {props.birthday || "n/a"}</li>
                <li>Patronus: {props.patronus || "n/a"}</li>
              </ul>
            </div>
            <div>
              <h3 className="content-title">Wand:</h3>
              <ul className="wand-list">
                <li>Wood: {props.wandWood || "n/a"}</li>
                <li>Core: {props.wandCore || "n/a"}</li>
                <li>Length: {props.wandLength || "n/a"}</li>
              </ul>
            </div>
            <div>
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
              <div className="emoji">{emoji}</div>
            </div>
          </div>
          <div className="emoji-buttons">
            <button
              className="emoji-item emoji-item-border1"
              onClick={() => {
                setEmoji(!emoji ? "☠️" : "");
              }}
            >
              ☠️
            </button>
            <button
              className="emoji-item"
              onClick={() => {
                setEmoji(!emoji ? "🌕" : "");
              }}
            >
              🌕
            </button>
            <button
              className="emoji-item"
              onClick={() => {
                setEmoji(!emoji ? "👻" : "");
              }}
            >
              👻
            </button>
            <button
              className="emoji-item emoji-item-border2"
              onClick={() => {
                setEmoji(!emoji ? "🕯️" : "");
              }}
            >
              🕯️
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Card;
