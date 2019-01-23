import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tipPercent: null,
      totalBill: null,
      totalTip: null,
      totalBillWithTip: null,
    }
  }

  render() {
    return (
      <div className="App">
        <section className="body">
          <h1>Tip Calculator</h1>
          <form action="">
            Desired Tip Percent: <input type="text" className="percentage"/>
            Total Bill: <input type="text" className="total"/>
          </form>
          <div className="results">
            <h3>Tip</h3>
            <p>Total Tip Amount: {/* Output Tip */} </p>
            <p>Total Bill with Tip Amount: {/* Output Tip */}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
