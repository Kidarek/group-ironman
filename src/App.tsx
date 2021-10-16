import * as React from 'react';
import './App.css';
import PlayerStats from './Components/PlayerStats';

function App() {
  return (
    <div className="App">
      <PlayerStats name = 'RangingThief'></PlayerStats>
      <PlayerStats name = 'ArgonianLord'></PlayerStats>
      <PlayerStats name = 'LustyLesbian'></PlayerStats>
    </div>
  );
}

export default App;
