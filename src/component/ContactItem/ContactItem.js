import React, {Fragment, useState} from 'react';
import Modal from "../../UI/Modal/Modal";
import ContactSummary from "../ContactSummary/ContactSummary";

import './ContactItem.css';
import {withRouter} from "react-router";
import {deleteContact} from "../../store/actions";
import {connect} from "react-redux";

const ContactItem = props => {
  const initialState = false;

  const [showModal, setShowModal] = useState(initialState);

  const closeModalHandler = () => {
    setShowModal(false)
  };

  const showModalHandler = () => {
    setShowModal(true)
  };

  const deleteCurrentContact = async () => {

    await props.delete(props.id);

    closeModalHandler();
  };

  const toEditPage = async () => {
    const contactData = {
      name: props.name,
      photo: props.photo,
      phone: props.phone,
      email: props.email,
      id: props.id,
    };

    props.history.push({
      pathname: `/contacts/edit/${props.id}`,
      contactData
    })
  };

  return (
    <Fragment>
      <div className='ContactItem' onClick={showModalHandler}>
        <img src={props.photo} alt="img"/>
        <b>{props.name}</b>
      </div>
      <Modal
        show={showModal}
        close={closeModalHandler}
        id={props.id}
        toEdit={toEditPage}
        toDelete={deleteCurrentContact}
      >
        <ContactSummary
          name={props.name}
          phone={props.phone}
          photo={props.photo}
          email={props.email}
        />
      </Modal>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(deleteContact(id))
});

export default connect(null, mapDispatchToProps)(withRouter(ContactItem));