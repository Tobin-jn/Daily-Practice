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

          <form className='calculator__form--tip-percent'>
            <p className='calculator__form-heading'>Tip Percent</p> 
            <input 
              type="number" 
              className="calculator__input-percentage"
              placeholder="20%"
              name='tipPercent'
              value={this.state.tipPercent}
              onChange={this.handleChange}
            />
          </form>

          <form className='calculator__form--bill-amount'>
            <p className='calculator__form-heading'>Bill</p>
            <input 
              type="number" 
              className="calculator__input-total"
              placeholder='$100.00'
              name='totalBill'
              value={this.state.totalBill}
              onChange={this.handleChange}
            />
          </form>

          <div className="tip-results">
            <p className='results__amount-tip' >Total Tip</p>
            <p className='results__amount--color'>{this.state.totalTip}</p>
          </div>

          <div className="bill-results">
            <p className='results__amount-bill' >Total Bill</p>
            <p className='results__amount--color'>{this.state.totalBillWithTip}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
          // <h1 className="calculator__heading">Tip Calculator</h1>
// 
            // <h3 className='results__heading'>Tip Totals</h3>

