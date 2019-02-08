import React, { Component } from 'react';

class ControlForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      status: 'Not Completed',
      tags: [],
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target

    this.setState({
      [name]: value
    })
  }

  handleTags = (event) => {
    const { value } = event.target
    const tagsArr = [...this.state.tags, value]

    this.setState({
      tags: tagsArr
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addResolution(this.state)
    this.setState({
      title: '',
      description: '',
      status: 'Not Completed',
      tags: [],
    })
  }

  render(){
    return(
      <div className="resolution-container">
        <form 
          className="resolution-form"
          onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            
          />
          <input 
            type="text"
            placeholder="Description"
            onChange={this.handleChange}
            value={this.state.description}
            name='description'

          />
          <select 
            name='status' 
            value={this.state.status} 
            onChange={this.handleChange} >
            <option value="Not Completed">Not Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <select
            multiple={true}
            name='tags'
            value={this.state.tags}
            onChange={this.handleTags}>
            <option value="Health">Health</option>
            <option value="Work">Work</option>
            <option value="Family">Family</option>
            <option value="Good Habits">Good Habits</option>
            <option value="Bad Habits">Bad Habits</option>
            <option value="Friends">Friends</option>
            <option value="Fun">Fun</option>
          </select>

          <button 
            className="resolution-btn"
            >Submit</button>
        </form>
      </div>
    )
  }
 }

 export default ControlForm;



          //  <input 
          //   type="text"
          //   placeholder="Tags"
          // />