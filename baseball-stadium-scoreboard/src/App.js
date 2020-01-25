import React from 'react'
import {useState} from "react"

// import './App.css';

import Display from "./components/Display.js";
import Dashboard from "./components/Dashboard.js";
// import {InputHook }from "./hooks/InputHook.js";



function App() {



  // const [homeScore, setHomeScore, homeChange] = InputHook(0)
  // const [guestScore, setGuestScore, guestChange] = InputHook(0)
  

  const [homeScore, setHomeScore] = useState(0)
  const [guestScore, setGuestScore] = useState(0)



  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);

  
  const addBall= () =>{
    if(balls === 3) {

      setBalls(0);
      setStrikes(0);
      return
    }
    setBalls(balls + 1)
  }

  const addStrike = () =>{

    if(strikes === 2){
      setBalls(0)
      setStrikes(0)
      return
    }


    setStrikes(strikes + 1)

  }

  
  

  const addHit = () =>{

    setStrikes(0)
    setBalls(0)

  }

  const addFoul = () =>{
    if(strikes === 0) {
      setStrikes(strikes + 1)
    } else if( strikes ===1){
      setStrikes(strikes + 1)
    } else {
      return
    }

  }

  return (
    <div className="App">
      <Display homeScore={homeScore} guestScore={guestScore} strikes={strikes} balls={balls}/>

      <Dashboard addStrike={addStrike} addBall={addBall} addFoul={addFoul} addHit={addHit}/>
    </div>
  );
}

export default App;
