import * as React from 'react';
import './App1.css';
import IronmanGroup from './Components/IronmanGroup';

function App() {
  let lustArgMaidPlayers = ['RangingThief', 'ArgonianLord', 'LustyLesbian', 'LustyKiwi']
  let hogCrankers = ['Hog Narb', 'DaddyScoob', 'CrankinScary']
  return (
    <div className="App">
      <IronmanGroup name = 'LustyArgMaid' players = {lustArgMaidPlayers} group_id="group-31486"></IronmanGroup>
      <IronmanGroup name = 'HogCrankers' players = {hogCrankers} group_id = "group-22776"></IronmanGroup>
    </div>
  );
}

export default App;
