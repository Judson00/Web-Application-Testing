import React from 'react';
import { Card, CardTitle } from 'reactstrap';

const Display = props => {
  return (
    <div className='card-container'>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle data-testid='strikes-header'>Strikes</CardTitle>
        <Card style={{width: '50px', height: '50px', textAlign: 'center'}}>
          <CardTitle style={{color: 'black'}}>{props.strikeValue}</CardTitle>
        </Card>
      </Card>
     <Card body inverse color="warning">
        <CardTitle data-testid='fouls-header'>Fouls</CardTitle>
        <Card style={{width: '50px', height: '50px', textAlign: 'center'}}>
          <CardTitle style={{color: 'black'}}>{props.foulValue}</CardTitle>
        </Card>
      </Card>
      <Card body inverse color="danger">
        <CardTitle data-testid='balls-header'>Balls</CardTitle>
        <Card style={{width: '50px', height: '50px', textAlign: 'center'}}>
          <CardTitle style={{color: 'black'}}>{props.ballValue}</CardTitle>
        </Card>
      </Card>
    </div>
  );
};

export default Display;