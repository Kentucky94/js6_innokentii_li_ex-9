import React, {Component, Fragment} from 'react';
import {postContact} from "../../store/actions";
import {connect} from "react-redux";

class EditContactPage extends Component {
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

  render() {
    return (
      <Fragment>
        <form onSubmit={event => this.postContact(event, this.state)}>
          Name: <input type="text" name='name' onChange={this.onChangeDataHandler}/>
          Phone: <input type="number" name='phone' onChange={this.onChangeDataHandler}/>
          Email: <input type="email" name='email' onChange={this.onChangeDataHandler}/>
          Photo: <input type="text" name='photo' onChange={this.onChangeDataHandler}/>
          <button>SAVE</button>
        </form>
        <div>

        </div>

      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postContact: (contactData) => dispatch(postContact(contactData))
});

export default connect(null, mapDispatchToProps)(EditContactPage);