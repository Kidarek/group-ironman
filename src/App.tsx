import * as React from 'react';
import './App.css';
import PlayerStats from './Components/PlayerStats';

function App() {
  return (
    <div className="App">
      <PlayerStats name = 'RangingThief'></PlayerStats>
      <PlayerStats name = 'ArgonianLord'></PlayerStats>
      <PlayerStats name = 'LustyLesbian'></PlayerStats>
      <PlayerStats name = 'Hog Narb'></PlayerStats>
      <PlayerStats name = 'DaddyScoob'></PlayerStats>
      <PlayerStats name = 'CrankinScary'></PlayerStats>
    </div>
  );
}

export default App;
