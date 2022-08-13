import React from "react";
import diceTwenty from './dice-twenty.svg';
import meepleArmy from './meeple-army.svg';

function Header() {
  return (
    <React.Fragment>
      <h1 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <img src={diceTwenty} alt="d20" width="100" height="125"/> Board Game Widget Store<img src={meepleArmy} alt="meeples" width="100" height="125"/>
      </h1>
    </React.Fragment>
  )
}

export default Header;