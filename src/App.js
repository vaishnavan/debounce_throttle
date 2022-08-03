import React from "react";
import Debounce from "./components/Debounce";
import Throttle from "./components/Throttle";

const App = () => {
  return (
    <React.Fragment>
      <h1>Debounce result</h1>
      <Debounce />
      <h1>Throttle result</h1>
      <Throttle />
    </React.Fragment>
  );
};

export default App;
