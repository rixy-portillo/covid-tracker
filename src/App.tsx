import React, { useEffect, useState } from 'react';
import './App.css';
import { covidDataToMap } from './client/Clients';
import Country from './component/Country';

function App() {
  const [state, setState] = useState<any[]>([])

  useEffect(() => {
    covidDataToMap().then(setState)

    const internval = setInterval(
      () => covidDataToMap().then(setState),
      1000 * 60 * 10
    )

    return () => clearInterval(internval)
  }, [])

  return (
    <div className="container">
      <div className="title">
        <h2>Global Coronovirus Cases</h2>
      </div>
      <div className="map">
        <Country data={state} />
      </div>
    </div>
  );
}

export default App;
