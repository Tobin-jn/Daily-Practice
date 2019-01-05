import React, { Component } from 'react';
import FunForm from './FunForm';


class App extends Component {
  addEvent = async (funEvent) => {
    const response = await fetch('http://localhost:3001/events', {
      method: 'POST',
      body: JSON.stringify(funEvent),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    debugger
      const postedEvent = await response.json()

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to FunList!</h2>
          <div className='Event-form'>
            <FunForm addEvent={this.addEvent} />
          </div>
        </div>
        <div className="Fun-area">
          asdfasdfasdf
        </div>
      </div>
    );
  }
}

export default App;
