import React from "react";
import DayCard from "./components/dayCard/DayCard";
import "./index.css";
import FutureUpdates from "./components/futureUpdates/FutureUpdates";

function App() {
  return (
    <div className=" md:grid grid-cols-3">
      <div className="col-span-1">
        <DayCard />
        <FutureUpdates />
      </div>
    </div>
  );
}

export default App;
