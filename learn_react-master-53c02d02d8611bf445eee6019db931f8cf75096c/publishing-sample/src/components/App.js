import React, { Component } from 'react';
import MessageForm from './sample/MessageForm';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './App.css';

const API_URL = 'https://react-sample-project.firebaseio.com/messages.json';
const API_HEADERS = {
  "Content-Type": "application/json"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {},
      loadedMessages: []
    }
  }

  componentWillMount () {
    this.getMessages();
  }

  setMessage(message) {
    const pastState = this.state.message;
    let newState = pastState;
    newState = message;
    newState.id = Math.random();
    fetch(API_URL, { "method": "post", "headers": API_HEADERS, "body": JSON.stringify(newState) })
      .then((response) => {
        if (response.ok) {
          console.log('Success Added');
        } else {
          throw new Error('Server response was\'t OK...T_T');
        }
      })
      .catch((error) => {
        console.error('Error fetching:', error);
        newState = pastState;
      });
    this.setState({ message: newState });

    this.getMessages();
  }

  getMessages() {
    fetch(API_URL, { "headers": API_HEADERS })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ loadedMessages: Object.keys(responseData).map(key => responseData[key]) });
      })
      .catch((error) => {
        console.error('Error fetching and parsing data', error);
      });
  }

  render() {


    return (
      <div className="container App">
        <MessageForm setMessage={(message) => this.setMessage(message)} loadedMessages={this.state.loadedMessages} />
      </div>
    );
  }
}

export default App;
