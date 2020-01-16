import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Display from './components/Display';
import Buttons from './components/DashBoard'

function App() {

  const [strike, setStrike] = useState(0);
  const [foul, setFoul] = useState(0);
  const [ball, setBall] = useState(0);

  if(strike > 2){
    setStrike(0)
    setFoul(0)
    setBall(0)
  }else if(ball > 3){
    setStrike(0)
    setFoul(0)
    setBall(0)
  }

  return (
    <div className='App'>
      <Display 
        strikeValue={strike}
        setStrikeValue={setStrike}
        foulValue={foul}
        setFoulValue={setFoul}
        ballValue={ball}
        setBallValue={setBall}
      />
      <Buttons 
        strikeValue={strike}
        setStrikeValue={setStrike}
        foulValue={foul}
        setFoulValue={setFoul}
        ballValue={ball}
        setBallValue={setBall}
      />
    </div>
  );
}

export default App;
