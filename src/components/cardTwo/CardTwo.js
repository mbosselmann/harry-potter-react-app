import "./CardTwo.css";
import expandMore from "./expand-more.png";

function CardTwo() {
  const characterName = "Harry Potter ";
  const actorName = "(Daniel Radcliffe)";
  const gender = "male";
  const birthday = "31-07-1980";
  const hogwartsHouse = "Gryffindor";
  const patronus = "stag";

  const wandWood = "holly";
  const wandCore = "phoenix";
  const wandLength = 11;

  return (
    <section className="section-card">
      <div className="section-header">
        <img
          className="section-img"
          src="http://hp-api.herokuapp.com/images/harry.jpg"
          alt=""
        />
        <h2 className="section-header-title">
          {characterName}
          {actorName}
        </h2>
        <button className="expand-more-button">
          <img className="expand-more-img" src={expandMore} alt="" />
        </button>
      </div>
      <div className="section-content">
        <ul className="main-info-list">
          <h3>Basics:</h3>
          <li>Gender: {gender}</li>
          <li>Birthday: {birthday}</li>
          <li>House: {hogwartsHouse}</li>
          <li>Patronus: {patronus}</li>
        </ul>
        <ul className="wand-list">
          <h3>Wand:</h3>
          <li>Wood: {wandWood}</li>
          <li>Core: {wandCore}</li>
          <li>Length: {wandLength}</li>
        </ul>
      </div>
    </section>
  );
}

export default CardTwo;
