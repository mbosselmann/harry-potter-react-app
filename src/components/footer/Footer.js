import "./Footer.css";

function Footer() {
  const [activeHouse, setActiveHouse] = useState("");

  return (
    <footer>
      <nav id="house-filter" aria-label="hogwarts houses menu">
        <button
          aria-label="gryffindor"
          className={
            activeHouse === "Gryffindor"
              ? "nav-button-gryffindor--active"
              : "nav-button-gryffindor"
          }
          onClick={() => {
            setActiveHouse("Gryffindor");
          }}
        >
          G
        </button>
        <button
          aria-label="ravenclaw"
          className={
            activeHouse === "Ravenclaw"
              ? "nav-button-ravenclaw--active"
              : "nav-button-ravenclaw"
          }
          onClick={() => {
            setActiveHouse("Ravenclaw");
          }}
        >
          R
        </button>
        <button
          aria-label="hufflepuff"
          className={
            activeHouse === "Hufflepuff"
              ? "nav-button-hufflepuff--active"
              : "nav-button-hufflepuff"
          }
          onClick={() => {
            setActiveHouse("Hufflepuff");
          }}
        >
          H
        </button>
        <button
          aria-label="slytherin"
          className={
            activeHouse === "Slytherin"
              ? "nav-button-slytherin--active"
              : "nav-button-slytherin"
          }
          onClick={() => {
            setActiveHouse("Slytherin");
          }}
        >
          Allies
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
