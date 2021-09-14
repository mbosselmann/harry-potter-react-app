import "./Card.css";
import expandMore from "./expand-more.png";

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

  return (
    <section className="section-card">
      <div className="section-header">
        <div>
          <img className="section-img" src={props.imageURL} alt="" />
        </div>
        <h2 className="section-header-title">{props.characterName}</h2>
        <div className={houseColor}>{props.hogwartsHouse}</div>
        <button className="expand-more-button">
          <img className="expand-more-img" src={expandMore} alt="" />
        </button>
      </div>
      <div className="section-content">
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
      </div>
    </section>
  );
}

export default Card;
