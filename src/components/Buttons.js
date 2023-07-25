import satData from "./satData.js";
// import filterByType from "../App.js";
// import setSat from "../App.js";
// import displaySats from "../App.js";
import "./styling.css";


const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div className = 'flex-container'>
      {displaySats.map((sat, id) => {
        return (
          <button  onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick = {() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;