import React from 'react';
import ContentEditable from '../ContentEditable'
import '../App/App.css';

const Resolution = (props) => {

  const tags = props.tags.map( tag => {
    let tagStyle;
 
    switch(tag){
      case 'Health':
        tagStyle = {backgroundColor: '#d0efd3'};
        break;
      case 'Work':
        tagStyle = {backgroundColor: '#e25f70'};
        break;
      case 'Family':
        tagStyle = {backgroundColor: '#e7732f'};
        break;
      case 'Good Habits':
        tagStyle = {backgroundColor: '#dae9e4'};
        break;
      case 'Bad Habits':
        tagStyle = {backgroundColor: '#6cbf84'};
        break;
      case 'Friends':
        tagStyle = {backgroundColor: '#ca7f4c'};
        break;
      case 'Fun':
        tagStyle = {backgroundColor: '#895091'};
        break;
    }
    return <p className='resolution__tag' style={tagStyle} >{tag}</p>
  })

  let EditableH1 = ContentEditable('h1') 
  let EditableH3 = ContentEditable('h3') 
  let statusClass;

  if (props.status==='Completed'){
    statusClass = 'resolution__status--completed'
  } else if (props.status==='Not Completed'){
    statusClass = 'resolution__status--not-completed'
  } else {
    statusClass = 'resolution__status'
  }

  return(
    <div className='resolution'>
      <EditableH1 className='resolution__title' value={props.title} />
      <EditableH3 className='resolution__desc' value={props.description} />
      <p className={ statusClass }
      >Status: {props.status}</p>
      <div className='resolution__tag-container'>
        Resolution Tags: { tags }
      </div>
      <h5
        className='resolution__remove'
        onClick={()=> props.removeResolution(props.id)}
      >Remove</h5>
    </div>
  );
}

export default Resolution;