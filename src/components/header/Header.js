import "./Header.css";

function showHouseColor(hogHouse) {
  let houseColorDecor;
  if (hogHouse === "Gryffindor") {
    houseColorDecor = "gryffindor-header";
  } else if (hogHouse === "Ravenclaw") {
    houseColorDecor = "ravenclaw-header";
  } else if (hogHouse === "Hufflepuff") {
    houseColorDecor = "hufflepuff-header";
  } else if (hogHouse === "Slytherin") {
    houseColorDecor = "slytherin-header";
  } else if (hogHouse === "All") {
    houseColorDecor = "all-header";
  } else if (hogHouse === "") {
    houseColorDecor = "nohouse-header";
  }
  return houseColorDecor;
}

function Header(props) {
  return (
    <header className="header-container">
      <div className={"header-app " + showHouseColor(props.activeHouse)}>
        <h1>Hogwarts Criminals</h1>
      </div>
    </header>
  );
}

export default Header;
