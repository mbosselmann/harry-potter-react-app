import "./Footer.css";

function Footer() {
  const gryffindor = "Gryffindor".toUpperCase();
  const ravenclaw = "Ravenclaw".toUpperCase();
  const hufflepuff = "Hufflepuff".toUpperCase();
  const slytherin = "Allies".toUpperCase();

  return (
    <footer>
      <nav id="house-filter">
        <button className="nav-button-gryffindor">{gryffindor}</button>
        <button className="nav-button-ravenclaw">{ravenclaw}</button>
        <button className="nav-button-hufflepuff">{hufflepuff}</button>
        <button className="nav-button-slytherin">{slytherin}</button>
      </nav>
    </footer>
  );
}

export default Footer;
