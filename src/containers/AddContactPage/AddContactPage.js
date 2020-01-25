import React, {Component, Fragment} from 'react';
import {postContact} from "../../store/actions";
import {connect} from "react-redux";

import './AddContactPage.css';

class AddContactPage extends Component {
  state = {
    name: '',
    phone: 0,
    email: '',
    photo: '',
  };

  onChangeDataHandler = (event) => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    })
  };

  postContact = async (event, contactData) => {
    event.preventDefault();

    await this.props.postContact(contactData);

    this.props.history.push('/');
  };

  toMainPageHandler = () => {
    this.props.history.push('/');
  };

  render() {
    let img = '';

    if(this.state.photo){
      img = this.state.photo;
    }else{
      img = 'https://vectorified.com/images/avatar-icon-png-9.jpg';
    }

    return (
      <Fragment>
        <h2>Add new contact</h2>
        <form onSubmit={event => this.postContact(event, this.state)}>
          Name: <input type="text" name='name' onChange={this.onChangeDataHandler}/>
          Phone: <input type="number" name='phone' onChange={this.onChangeDataHandler}/>
          Email: <input type="email" name='email' onChange={this.onChangeDataHandler}/>
          Photo: <input type="text" name='photo' onChange={this.onChangeDataHandler}/>
          Photo preview: <img className='previewImg' src={img} alt="something"/>
          <button>SAVE</button>
          <button type='button' onClick={this.toMainPageHandler}>Back to contacts</button>
        </form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postContact: (contactData) => dispatch(postContact(contactData))
});

export default connect(null, mapDispatchToProps)(AddContactPage);