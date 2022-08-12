import React from "react";
import PropTypes from "prop-types";

function Item(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.name} - {props.amount} - {props.price}</h3>
          <ul>
            <li>{props.origin}</li>
            <li>{props.color}</li>
            <li>{props.size}</li>
          </ul>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  amount: PropTypes.number,
  price: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;