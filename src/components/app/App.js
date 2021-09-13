// import logo from "./logo.svg";
import "./App.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Card from "../card/Card";
import CardTwo from "../cardTwo/CardTwo";
import CardThree from "../cardThree/CardThree";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Card />
        <CardTwo />
        <CardThree />
      </main>
      <Footer />
    </div>
  );
}

export default App;
