import React, {Component, Fragment} from 'react';
import {editContact, postContact} from "../../store/actions";
import {connect} from "react-redux";

class EditContactPage extends Component {
  state = {
    name: '',
    phone: 0,
    email: '',
    photo: '',
  };

  componentDidMount() {
    if(this.props.location.contactData){

      this.setState({
        name: this.props.location.contactData.name,
        phone: this.props.location.contactData.phone,
        photo: this.props.location.contactData.photo,
        email: this.props.location.contactData.email,
      })
    }
  }

  onChangeDataHandler = (event) => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    })
  };

  editContact = async (event, contactID, contactData) => {
    event.preventDefault();

    await this.props.editContact(contactID, contactData);

    this.props.history.push('/');
  };

  render() {
    let contactID = '';

    if(this.props.location.contactData){
      contactID = this.props.location.contactData.id;
    }

    return (
      <Fragment>
        <form onSubmit={event => this.editContact(event, contactID, this.state)}>
          Name: <input type="text" name='name' onChange={this.onChangeDataHandler} value={this.state.name}/>
          Phone: <input type="number" name='phone' onChange={this.onChangeDataHandler} value={this.state.phone}/>
          Email: <input type="email" name='email' onChange={this.onChangeDataHandler} value={this.state.email}/>
          Photo: <input type="text" name='photo' onChange={this.onChangeDataHandler} value={this.state.photo}/>
          <button>SAVE</button>
        </form>
        <div>

        </div>

      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editContact: (contactID, contactData) => dispatch(editContact(contactID, contactData))
});

export default connect(null, mapDispatchToProps)(EditContactPage);