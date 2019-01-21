//Version two uses and interval and switch statement to keep the light going
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
    red: { backgroundColor: "red" },
    yellow: { backgroundColor: "gray" },
    green: { backgroundColor: "gray" },
    next: 'yellow'
    }
  }

  componentDidMount(){
    this.setInterval()
  }

  setInterval = () => {
    setTimeout(this.changeColor, 2000)
  }

  changeColor = () => {
    switch( this.state.next ){
      case 'red':
        this.setState({
          red: { backgroundColor: "red" },
          yellow: { backgroundColor: "gray" },
          green: { backgroundColor: "gray" },
          next: 'yellow'
        });
        break;
      case 'yellow':
        this.setState({
          red: { backgroundColor: "gray" },
          yellow: { backgroundColor: "yellow" },
          green: { backgroundColor: "gray" },
          next: 'green'
        });
        break;
      case 'green':
        this.setState({
          red: { backgroundColor: "gray" },
          yellow: { backgroundColor: "gray" },
          green: { backgroundColor: "green" },
          next: 'red'
        });
        break;
    } 
    this.setInterval()
  }

  render() {
    return (
      <div className="App">
        <div className= 'light' style={this.state.red}></div>
        <div className= 'light' style={this.state.yellow}></div>
        <div className= 'light' style={this.state.green}></div>
      </div>
    );
  }
}

export default App;

//Version One

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       red: false,
//       yellow: false,
//       green: false,
//     }
//   }

//   componentDidMount(){
//     this.changeColors()
//   }

//   changeColors = () => {
//     setTimeout(this.changeRed, 5000)
//     setTimeout(this.changeYellow, 7000)
//     setTimeout(this.changeGreen, 9000)
//   }

//   changeRed = () => {
//     this.setState({ red: true })
//   }

//   changeYellow = () => {
//     this.setState({ red: false, yellow: true })
//   }

//   changeGreen = () => {
//     this.setState({ yellow: false, green: true })
//   }

//   render() {
//     let light = 'light'
//     let redClass = 'light red'
//     let yellowClass = 'light yellow'
//     let greenClass = 'light green'

//     return (
//       <div className="App">
//         <div className= { this.state.red ? redClass : light }> </div>
//         <div className= { this.state.yellow ? yellowClass : light }> </div>
//         <div className= { this.state.green ? greenClass : light }> </div>
//       </div>
//     );
//   }
// }

// export default App;
