import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";

import './Modal.css';
import {deleteContact} from "../../store/actions";
import {connect} from "react-redux";

const Modal = props => {
  const deleteCurrentContact = async (id) => {

    await props.delete(id);

    props.close();
  };

  return (
    <Fragment>
      <Backdrop
        show={props.show}
        onClick={props.close}
      />
      <div
        className='Modal'
        style={{
          display: props.show ? 'flex' : 'none'
        }}
      >
        {props.children}
        <div>
          <button>Edit</button>
          <button onClick={() => {deleteCurrentContact(props.id)}}>Delete</button>
          <button onClick={props.close}>Close</button>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(deleteContact(id))
});

export default connect(null ,mapDispatchToProps)(Modal);