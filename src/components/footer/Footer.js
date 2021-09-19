import { useState } from "react";
import "./Footer.css";

function Footer({ activeHouse, onHouseButtonClick, onShowTargetsButtonClick }) {
  const [dropUpMenuContent, setDropUpMenuContent] = useState(false);

  return (
    <footer>
      <nav id="house-filter" aria-label="hogwarts houses menu">
        <div className="dropUpMenu">
          <button
            className={
              "dropUpHouses " +
              (dropUpMenuContent ? "dropUpHouses--active" : "")
            }
            onClick={() => {
              setDropUpMenuContent(!dropUpMenuContent);
            }}
          >
            Filter
          </button>
          {dropUpMenuContent && (
            <div className="dropUpMenu__content">
              <button
                aria-label="all houses"
                className={
                  "nav-button-all " +
                  (activeHouse === "All" ? "nav-button-all--active" : "")
                }
                onClick={() => {
                  onHouseButtonClick("All");
                  setDropUpMenuContent(!dropUpMenuContent);
                }}
              >
                All targets
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
                  setDropUpMenuContent(!dropUpMenuContent);
                }}
              >
                Gryffindor
              </button>
              <button
                aria-label="ravenclaw"
                className={
                  "nav-button-ravenclaw " +
                  (activeHouse === "Ravenclaw"
                    ? "nav-button-ravenclaw--active"
                    : "")
                }
                onClick={() => {
                  onHouseButtonClick("Ravenclaw");
                  setDropUpMenuContent(!dropUpMenuContent);
                }}
              >
                Ravenclaw
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
                  setDropUpMenuContent(!dropUpMenuContent);
                }}
              >
                Hufflepuff
              </button>
              <button
                aria-label="no house"
                className={
                  "nav-button-nohouse " +
                  (activeHouse === "" ? "nav-button-nohouse--active" : "")
                }
                onClick={() => {
                  onHouseButtonClick("");
                  setDropUpMenuContent(!dropUpMenuContent);
                }}
              >
                House unknown
              </button>
            </div>
          )}
        </div>
        <button
          className="target-list"
          onClick={() => {
            onShowTargetsButtonClick();
          }}
        >
          Targets
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
      </nav>
    </footer>
  );
}

export default Footer;
