import { ColorItem } from "./ColorItem";
import "./App.css";
import { useEffect } from "react";

function App() {
  const colors = ["#222", "#4834d4", "#3df", "#f9ca24", "#6ab04c", "#30336b"];

  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color);
  };

  useEffect(() => {
    const getCurrentColor = localStorage.getItem("color");
    // console.log(getCurrentColor);
    setTheme(getCurrentColor);
  }, []);

  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("--bg-color");
    // console.log(currentColor);
    setTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };

  return (
    <>
      <div className="App">
        <div className="color-switcher">
          {/* <button>box</button> */}
          <h1 className="heading">Select Color</h1>
          <div className="color-list">
            {colors?.map((color, index) => (
              <ColorItem key={index} color={color} setColor={setColor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
