import React, {Fragment, useState} from 'react';
import Modal from "../../UI/Modal/Modal";
import ContactSummary from "../ContactSummary/ContactSummary";

import './ContactItem.css';

const ContactItem = props => {
  const initialState = false;

  const [showModal, setShowModal] = useState(initialState);

  const closeModalHandler = () => {
    setShowModal(false)
  };

  const showModalHandler = () => {
    setShowModal(true)
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
        name={props.name}
        phone={props.phone}
        id={props.id}
        photo={props.photo}
        email={props.email}
      >
        <ContactSummary
          name={props.name}
          phone={props.phone}
          id={props.id}
          photo={props.photo}
          email={props.email}
        />
      </Modal>
    </Fragment>
  );
};

export default ContactItem;