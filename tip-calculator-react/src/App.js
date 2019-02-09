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
        <section className="calculator">
          <h1 className="calculator__heading">Tip Calculator</h1>
          <form className='calculator__form'>
            Desired Tip Percent: <input 
              type="number" 
              className="calculator__input-percentage"
              placeholder="20%"
              name='tipPercent'
              value={this.state.tipPercent}
              onChange={this.handleChange}
              /><br />
            Total Bill: <input 
              type="number" 
              className="calculator__input-total"
              placeholder='$100.00'
              name='totalBill'
              value={this.state.totalBill}
              onChange={this.handleChange}
              />
          </form>
          <div className="results">
            <h3 className='results__heading'>Tip Totals</h3>
            <p className='results__amount' >Total Tip Amount: <span className='results__amount--color'>{this.state.totalTip}</span> </p>
            <p className='results__amount' >Total Bill with Tip Amount: <span className='results__amount--color'>{this.state.totalBillWithTip}</span></p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
