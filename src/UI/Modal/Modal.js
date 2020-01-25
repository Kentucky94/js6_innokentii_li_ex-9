import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";

import './Modal.css';

const Modal = props => {

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
          <button onClick={props.toEdit}>Edit</button>
          <button onClick={props.toDelete}>Delete</button>
          <button onClick={props.close}>Close</button>
        </div>
      </div>
    </Fragment>
  );
};


export default Modal;