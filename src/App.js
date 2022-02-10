import React from "react"

import './styles.css'
import Header from './components/header/header'
import Timeframe from "./components/timeframe/timeframe"
import Tier from "./components/timeframe/tier"
import Details from "./components/details/details"

const App = () => {
  return (
    <>
      <div className="app">
        <div className="inner-container">
          <Header />
          <Timeframe />
          <Tier />
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;
