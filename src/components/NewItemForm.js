import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import Form from "./Form";

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, origin: event.target.origin.value, amount: parseInt(event.target.amount.value) || 130,price: event.target.price.value,color: event.target.color.value,size: event.target.size.value, id: v4()});
  }

  return (
    <React.Fragment>
      <Form 
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Add Widget" />
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;