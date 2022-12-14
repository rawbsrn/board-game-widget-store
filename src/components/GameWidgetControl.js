import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import EditItemForm from './EditItemForm';
import ItemDetail from './ItemDetail';

class ItemControl extends React.Component {

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

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }
  

  handleSellClick = () => {
    const editedMainItemList = this.state.mainItemList.filter(
      (item) => (item.amount -= 1)
    );
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
    });
  };

    handleChange = (event) => {
      this.setState({amount: event.target.value});
    }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
      selectedItem: null
    });
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

  buttonStyle = {
    "display": "block",
    "margin": "auto",
    "padding": ".3em .6em",
    "backgroundColor": "black",
    "color": "white",
    "fontSize": "1.5rem",
    "border": "none",
    "borderRadius": ".5em"
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditItemForm item = {this.state.selectedItem} onEditItem = {this.handleEditingItemInList} />
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail 
      item={this.state.selectedItem} 
      onClickDelete={this.handleDeletingItem}
      onClickEdit = {this.handleEditClick}
      onClickSell = {this.handleSellClick}
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
        <button style={this.buttonStyle}
        onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default ItemControl;
