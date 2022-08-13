import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickDelete, onClickEdit, onClickSell } = props; 



  return (
    <React.Fragment>
      <hr/>
      <h1>Item Detail</h1>
      <h3>{item.name} - {item.amount} - {item.price}</h3>
          <ul>
            <li>{item.origin}</li>
            <li>{item.color}</li>
            <li>{item.size}</li>
          </ul>
          <div style={{
    "text-align": "center",
    "display": "block",
    "margin": "auto"
  }}>
          <button style= {{
  "padding": ".05em .5em",
  "backgroundColor": "blue",
  "color": "white",
  "fontSize": "1.5rem",
  "border": "none",
  "borderRadius": ".5em",
  "margin": "auto"}}
    onClick={onClickEdit}>Update Item</button>
          <button style= {{
  "padding": ".05em .5em",
  "backgroundColor": "green",
  "color": "white",
  "fontSize": "1.5rem",
  "border": "none",
  "borderRadius": ".5em",
  "margin": "auto"}}
onClick={onClickSell}>Sell Item</button>
      <button style= {{
  "padding": ".05em .5em",
  "backgroundColor": "red",
  "color": "white",
  "fontSize": "1.5rem",
  "border": "none",
  "borderRadius": ".5em",
  "margin": "auto"}}
    onClick={()=> onClickDelete(item.id)}>Delete Item</button>
        </div>
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