import React from 'react';
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";

import './Layout.css';

const Layout = props => {
  const toAddContactsPage = () => {
    props.history.push('/contacts/add')
  };

  return (
    <div className='Layout'>
      <div className='Header'>
        <NavLink to='/' exact>Contacts</NavLink>
        <button onClick={toAddContactsPage}>Add new contact</button>
      </div>
      {props.children}
    </div>
  );
};

export default withRouter(Layout);