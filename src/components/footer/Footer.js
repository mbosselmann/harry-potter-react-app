import "./Footer.css";

function Footer() {
  const gryffindor = "Gryffindor".toUpperCase();
  const ravenclaw = "Ravenclaw".toUpperCase();
  const hufflepuff = "Hufflepuff".toUpperCase();
  const slytherin = "Slytherin".toUpperCase();

  return (
    <footer>
      <nav id="house-filter">
        <button className="nav-button">{gryffindor}</button>
        <button className="nav-button">{ravenclaw}</button>
        <button className="nav-button">{hufflepuff}</button>
        <button className="nav-button">{slytherin}</button>
      </nav>
    </footer>
  );
}

export default Footer;
