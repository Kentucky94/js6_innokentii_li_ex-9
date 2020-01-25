import React, {Component} from 'react';
import {connect} from "react-redux";
import {initContacts} from "../../store/actions";
import ContactItem from "../../component/ContactItem/ContactItem";

import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.initContacts();
  }

  render() {
    const contacts = this.props.contacts.map(contact =>
      <ContactItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        photo={contact.photo}
        phone={contact.phone}
        email={contact.email}
      />
    );

    return (
      <div className='MainPage'>
        {contacts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    initContacts: () => dispatch(initContacts()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);