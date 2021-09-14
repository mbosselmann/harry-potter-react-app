// import logo from "./logo.svg";
import "./App.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Card from "../card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Card
          characterName="Harry Potter"
          gender="male"
          birthday="31-07-1980"
          patronus="stag"
          wandWood="holly"
          wandCore="phoenix"
          wandLength="11"
          hogwartsHouse="Gryffindor"
          imageURL="http://hp-api.herokuapp.com/images/harry.jpg"
        />
        <Card
          characterName="Draco Malfoy"
          gender="male"
          birthday="05-06-1980"
          patronus=""
          wandWood="hawthorn"
          wandCore="unicorn tail-hair"
          wandLength="10"
          hogwartsHouse="Slytherin"
          imageURL="http://hp-api.herokuapp.com/images/draco.jpg"
        />
        <Card
          characterName="Cedric Diggory"
          gender="male"
          birthday=""
          patronus=""
          wandWood="ash"
          wandCore="unicorn hair"
          wandLength="12.25"
          hogwartsHouse="Hufflepuff"
          imageURL="http://hp-api.herokuapp.com/images/cedric.png"
        />
        <Card
          characterName="Luna Lovegood"
          gender="female"
          birthday="13-02-1981"
          patronus="hare"
          wandWood=""
          wandCore=""
          wandLength=""
          hogwartsHouse="Ravenclaw"
          imageURL="http://hp-api.herokuapp.com/images/luna.jpg"
        />
        <Card
          characterName="Remus Lupin"
          gender="male"
          birthday="10-03-1960"
          patronus="wolf"
          wandWood="cypress"
          wandCore="unicorn tail-hair"
          wandLength="10.25"
          hogwartsHouse="Gryffindor"
          imageURL="http://hp-api.herokuapp.com/images/lupin.jpg"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
