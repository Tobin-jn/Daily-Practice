import React, { Component } from 'react';
import './App.css';
import ResolutionsForm from './ResolutionsForm';
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
        <ResolutionsForm addResolution={this.addResolution} />
        <ResolutionsContainer resolutions={this.state.resolutions} />
      </div>
    );
  }
}

export default App;
