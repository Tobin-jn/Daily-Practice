import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tipPercent: '',
      totalBill: '',
      totalTip: '',
      totalBillWithTip: '', 
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleTip = this.handleTip.bind(this);
  }

  async handleChange(event){
    const { name, value } = event.target
    await this.setState({
      [name]: value
    })
    this.handleTip()
  }

  handleTip(event){
    const { tipPercent, totalBill} = this.state
    if(tipPercent.length !== 0 && totalBill.length !== 0){
      const bill = parseFloat(totalBill)
      const tip = parseFloat(tipPercent)/100
      this.setState({
        totalTip: (bill*tip).toFixed(2),
        totalBillWithTip: (bill + (bill*tip)).toFixed(2)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <section className="body">
          <h1>Tip Calculator</h1>
          <form action="">
            Desired Tip Percent: <input 
              type="number" 
              className="percentage"
              placeholder="20%"
              name='tipPercent'
              value={this.state.tipPercent}
              onChange={this.handleChange}
              />
            Total Bill: <input 
              type="number" 
              className="total"
              placeholder='$100.00'
              name='totalBill'
              value={this.state.totalBill}
              onChange={this.handleChange}
              />
          </form>
          <div className="results">
            <h3>Tip</h3>
            <p>Total Tip Amount: {this.state.totalTip} </p>
            <p>Total Bill with Tip Amount: {this.state.totalBillWithTip}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
