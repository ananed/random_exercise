import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'no message received yet!' };
  }

  handleClick = () => {
    let me = this;
    let { qewd } = this.props;
    let messageObj = {
      type: 'isctest',
      //ajax: true,
      params: {
        text: 'my ISC test message'
      }
    };
    qewd.send(messageObj, function(messageObj) {
      //console.log(messageObj);
      me.setState(prevState => ({
        message: messageObj.message.text
      }));
    });
  }

  render() {
    let { qewdProviderState } = this.props;
    return (
      <span>
        {
          qewdProviderState.registered ?
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
              </div>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <button onClick={this.handleClick}>Send message to ISC</button>
              <p className="App-intro">
                {this.state.message}
              </p>
            </div>
          :
            <p className="App-intro">
              Registering QEWD ...
            </p>
        }
      </span>
    );
  }
}
export default App;