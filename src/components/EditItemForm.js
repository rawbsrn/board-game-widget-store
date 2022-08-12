import React from "react";
import Form from "./Form";
import PropTypes from "prop-types";

function EditItemForm (props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({name: event.target.name.value, origin: event.target.origin.value, amount: parseInt(event.target.amount.value),price: event.target.price.value,color: event.target.color.value,size: event.target.size.value,id: item.id});
  }

  return (
    <React.Fragment>
      <Form 
        formSubmissionHandler={handleEditItemFormSubmission} 
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditItem: PropTypes.func,
  item: PropTypes.object
};

export default EditItemForm;