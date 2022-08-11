import React from 'react';
import List from './ItemList';

class GameWidgetControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null,
      editing: false
    };
  }



  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default GameWidgetControl;
