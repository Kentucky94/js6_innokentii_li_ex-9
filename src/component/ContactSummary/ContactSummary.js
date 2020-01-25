import React from 'react';

import './ContactSummary.css';

const ContactSummary = props => {
  return (
    <div className='ContactSummary'>
      <img src={props.photo} alt="some photo"/>
      <div>
        <h3>{props.name}</h3>
        <p>
          <b>Phone:</b> {props.phone}
        </p>
        <p>
          <b>Email:</b> {props.email}
        </p>
      </div>
    </div>
  );
};

export default ContactSummary;