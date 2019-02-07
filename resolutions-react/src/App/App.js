import React, { Component } from 'react';
import './App.css';
import ControlForm from './ControlForm';
import ResolutionsContainer from './ResolutionsContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      resolutions: [],
    }
  }

  addResolution = (resolution) => {
    const newRes = {...resolution, id: Date.now()}
    const newResolutions = [...this.state.resolutions, newRes]
    this.setState({
      resolutions: newResolutions,
    })
  }

  render() {
    return (
      <div className="App">
        <ControlForm addResolution={this.addResolution} />
        <ResolutionsContainer resolutions={this.state.resolutions} />
      </div>
    );
  }
}

export default App;
