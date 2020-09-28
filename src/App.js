import React from "react";
import Navbar from "./component/Navigation/index.js";
import Searchbar from "./component/Searchbar/index.js";
import InfoCard from "./component/InfoCard/index.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <InfoCard />
    </div>
  );
}

export default App;
