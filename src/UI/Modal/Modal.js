import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";

import {deleteContact} from "../../store/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import './Modal.css';

const Modal = props => {
  const deleteCurrentContact = async (id) => {

    await props.delete(id);

    props.close();
  };

  const toEditPage = async (id) => {
    const contactData = {
      name: props.name,
      photo: props.photo,
      phone: props.phone,
      email: props.email,
      id
    };

    props.history.push({
      pathname: `/contacts/edit/${id}`,
      contactData
    })
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
          <button onClick={() => {toEditPage(props.id)}}>Edit</button>
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

export default connect(null ,mapDispatchToProps)(withRouter(Modal));