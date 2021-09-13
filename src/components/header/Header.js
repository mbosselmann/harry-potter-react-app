import "./Header.css";
import logo from "./logo.svg";

function Header() {
  return (
    <header>
      <div className="header-app">
        <img id="hp-insights" src={logo} alt="Harry Potter Hogwarts Insights" />
        <h1>Hogwarts Insights</h1>
      </div>
    </header>
  );
}

export default Header;
