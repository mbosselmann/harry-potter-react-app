import "./Card.css";
import expandMore from "./expand-more.png";

function Card(allData) {
  return (
    <section className="section-card">
      <div className="section-header">
        <img className="section-img" src="" alt="" />
        <h2 className="section-header-title">Name</h2>
        <button className="expand-more-button">
          <img className="expand-more-img" src={expandMore} alt="" />
        </button>
      </div>
      <div className="section-content">
        <ul className="main-info-list">
          <h3>Basics:</h3>
          <li>Gender: </li>
          <li>Birthday: </li>
          <li>House: </li>
          <li>Patronus: </li>
        </ul>
        <ul className="wand-list">
          <h3>Wand:</h3>
          <li>Wood:</li>
          <li>Core:</li>
          <li>Length:</li>
        </ul>
      </div>
    </section>
  );
}

export default Card;
