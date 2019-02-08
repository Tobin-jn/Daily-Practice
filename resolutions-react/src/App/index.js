import React, { Component } from 'react';
import './App.css';
import ControlForm from '../ControlForm';
import ResolutionsContainer from '../ResolutionsContainer';

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

  removeResolution = (id) => {
    const filteredResolutions = this.state.resolutions.filter( resolution => {
      return resolution.id !== id
    })
    this.setState({
      resolutions: filteredResolutions
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Resolution Planner</h1>
        <ControlForm addResolution={this.addResolution} />
        <ResolutionsContainer 
          resolutions={this.state.resolutions}
          removeResolution={this.removeResolution} />
      </div>
    );
  }
}

export default App;
