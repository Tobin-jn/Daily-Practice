import React, { Component } from 'react';
import '../App/App.css';

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
      <div>
        <form 
          className="resolution-form"
          onSubmit={this.handleSubmit}>
          <input
            className='resolution-form__title-input' 
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            
          />
          <textarea 
            className='resolution-form__desc-input' 
            type="text"
            placeholder="Description"
            onChange={this.handleChange}
            value={this.state.description}
            name='description'
            cols='20'
            rows='4'
          ></textarea>
          <fieldset className='resolution-form__status-container' >
            <legend>Status</legend>
            <select 
              className='resolution-form__status' 
              name='status' 
              value={this.state.status} 
              onChange={this.handleChange} >
              <option value="Not Completed">Not Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </fieldset>

          <fieldset className='resolution-form__tag-container'>
            <legend>Resolution Tags</legend>
            <select
              className='resolution-form__tags'
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
          </fieldset>

          <button 
            className='resolution-form__submit' 
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