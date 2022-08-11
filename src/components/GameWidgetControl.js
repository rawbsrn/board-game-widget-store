import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

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

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({mainItemList: newMainItemList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail 
      item={this.state.selectedItem} 
      />
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>;
      buttonText = "Return to Item List"; 
    } else {
      currentlyVisibleState = <ItemList onItemSelection={this.handleChangingSelectedItem} itemList={this.state.mainItemList} />;
      buttonText = "Add Item"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default GameWidgetControl;
