import React from "react";

import Header from './components/header/header'
import Timeframe from "./components/timeframe/timeframe";
import Tier from "./components/timeframe/tier";
import Details from "./components/details/details";

const App = () => {
  return (
    <>
      <div style={{ marginInline: "10px" }}>
        <Header />
        <Timeframe />
        <Tier />
        <Details />
      </div>
    </>
  );
}

export default App;
