import satData from "./satData.js";
import filterByType from "../App.js";
import setSat from "../App.js";
import displaySats from "../App.js";
import "./styling.css";


const Buttons = () => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button className = {flex-container} onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;