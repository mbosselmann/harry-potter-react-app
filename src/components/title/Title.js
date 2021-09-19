import "./Title.css";

function Title({ activeHouse, filteredData }) {
  function showHouseName(hogHouse) {
    let hogwartsHouse;
    if (hogHouse === "Gryffindor") {
      hogwartsHouse = "Gryffindor";
    } else if (hogHouse === "Ravenclaw") {
      hogwartsHouse = "Ravenclaw";
    } else if (hogHouse === "Hufflepuff") {
      hogwartsHouse = "Hufflepuff";
    } else if (hogHouse === "Slytherin") {
      hogwartsHouse = "Slytherin";
    } else if (hogHouse === "All") {
      hogwartsHouse = "All Targets";
    } else if (hogHouse === "") {
      hogwartsHouse = "House unknown";
    }
    return hogwartsHouse;
  }

  const targetCount = filteredData.length;

  return (
    <section>
      <div className="title__content">
        <h2 className="title__title">{showHouseName(activeHouse)}</h2>
        <p>Entries: {targetCount}</p>
      </div>
    </section>
  );
}
export default Title;
