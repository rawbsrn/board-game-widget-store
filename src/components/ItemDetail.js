import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickDelete, onClickEdit, onClickSell } = props; 

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.name} - {item.price}</h3>
          <ul>
            <li>{item.amount}</li>
            <li>{item.origin}</li>
            <li>{item.color}</li>
            <li>{item.size}</li>
          </ul>
          <button onClick={onClickEdit}>Update Item</button>
      <button onClick={()=> onClickDelete(item.id)}>Delete Item</button>
        <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickSell: PropTypes.func
};

export default ItemDetail;