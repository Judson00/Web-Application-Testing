import React from 'react';
import { Button } from 'reactstrap';

const Buttons = props => {
  return (
    <div className='buttons'>
      <Button 
        color="secondary"
        onClick={() => {
          props.setStrikeValue(props.strikeValue + 1)
        }}
      >
        Strike
      </Button>
      <Button 
        color="warning"
        onClick={() => {
          if(props.foulValue < 2){
            props.setStrikeValue(props.strikeValue + 1)
            props.setFoulValue(props.foulValue + 1)
          }
        }}
      >
        Foul
      </Button>
      <Button 
        color="danger"
        onClick={() => {
          props.setBallValue(props.ballValue + 1) 
        }}
      >
        Ball
      </Button>
    </div>
  );
}

export default Buttons;