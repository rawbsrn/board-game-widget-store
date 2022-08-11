import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) =>
        <Item 
          whenItemClicked={props.onItemSelection}
          name={item.name}
          amount={item.amount}
          origin={item.origin}
          price={item.price}
          color={item.color}
          size={item.size}
          id={item.id}
          key={item.id}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemList;
