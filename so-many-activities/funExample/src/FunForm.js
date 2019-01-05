import React, {Component} from 'react';

class FunForm extends Component{
  constructor() {
    super()

    this.state = {
      name: '',
      description: ''
    }
  }

  updateInput = (event) => {
    const {value, name} = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addEvent(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Name'
          name='name'
          onChange={this.updateInput}
          value={this.state.name}
        />
        <input
          placeholder='Description'
          name='description' 
          onChange={this.updateInput}
          value={this.state.description}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default FunForm