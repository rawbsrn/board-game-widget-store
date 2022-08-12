import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Widget Name' />
        <input
          type='text'
          name='origin'
          placeholder='Widget Origin' />
          <input
          type='number'
          name='amount'
          placeholder='1' />
          <input
          type='text'
          name='price'
          placeholder='Widget Price' />
          <input
          type='text'
          name='color'
          placeholder='Widget color' />
          <input
          type='text'
          name='size'
          placeholder='Widget Size' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default Form;