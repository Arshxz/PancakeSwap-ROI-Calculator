import React from "react";

import Header from './components/header/header'
import Timeframe from "./components/timeframe/timeframe";
import Details from "./components/details/details";

const App = () => {
  return (
    <>
      <div style={{ marginInline: "10px" }}>
        <Header />
        <Timeframe />
        <Details />
      </div>
    </>
  );
}

export default App;
