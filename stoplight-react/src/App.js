import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      red: false,
      yellow: false,
      green: false,
    }
  }

  componentDidMount(){
    this.changeColors()
  }

  changeColors = () => {
    setTimeout(this.changeRed, 5000)
    setTimeout(this.changeYellow, 7000)
    setTimeout(this.changeGreen, 9000)
  }

  changeRed = () => {
    this.setState({ red: true })
  }

  changeYellow = () => {
    this.setState({ red: false, yellow: true })
  }

  changeGreen = () => {
    this.setState({ yellow: false, green: true })
  }

  render() {
    let light = 'light'
    let redClass = 'light red'
    let yellowClass = 'light yellow'
    let greenClass = 'light green'

    return (
      <div className="App">
        <div className= { this.state.red ? redClass : light }> </div>
        <div className= { this.state.yellow ? yellowClass : light }> </div>
        <div className= { this.state.green ? greenClass : light }> </div>
      </div>
    );
  }
}

export default App;
