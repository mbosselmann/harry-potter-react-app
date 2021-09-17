import "./Footer.css";

function Footer({ activeHouse, onHouseButtonClick }) {
  return (
    <footer>
      <nav id="house-filter" aria-label="hogwarts houses menu">
        <button
          aria-label="all houses"
          className={
            "nav-button-all " +
            (activeHouse === "All" ? "nav-button-all--active" : "")
          }
          onClick={() => {
            onHouseButtonClick("All");
          }}
        >
          All
        </button>

        <button
          aria-label="gryffindor"
          className={
            "nav-button-gryffindor " +
            (activeHouse === "Gryffindor"
              ? "nav-button-gryffindor--active"
              : "")
          }
          onClick={() => {
            onHouseButtonClick("Gryffindor");
          }}
        >
          G
        </button>
        <button
          aria-label="ravenclaw"
          className={
            "nav-button-ravenclaw " +
            (activeHouse === "Ravenclaw" ? "nav-button-ravenclaw--active" : "")
          }
          onClick={() => {
            onHouseButtonClick("Ravenclaw");
          }}
        >
          R
        </button>
        <button
          aria-label="hufflepuff"
          className={
            "nav-button-hufflepuff " +
            (activeHouse === "Hufflepuff"
              ? "nav-button-hufflepuff--active"
              : "")
          }
          onClick={() => {
            onHouseButtonClick("Hufflepuff");
          }}
        >
          H
        </button>
        <button
          aria-label="slytherin"
          className={
            "nav-button-slytherin " +
            (activeHouse === "Slytherin" ? "nav-button-slytherin--active" : "")
          }
          onClick={() => {
            onHouseButtonClick("Slytherin");
          }}
        >
          Allies
        </button>
        <button
          aria-label="no house"
          className={
            "nav-button-nohouse " +
            (activeHouse === "" ? "nav-button-nohouse--active" : "")
          }
          onClick={() => {
            onHouseButtonClick("");
          }}
        >
          O
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
