import React from 'react';
import ContentEditable from '../ContentEditable'

const Resolution = (props) => {
  const tags = props.tags.map( tag => {
    return <p className='tag'>{tag}</p>
  })

  let EditableH1 = ContentEditable('h1') 
  let EditableH3 = ContentEditable('h3') 

    return(
    <div 
      className="resolution"
    >
      <EditableH1 className='title' value={props.title} />
      <EditableH3 className='description' value={props.description} />
      <h4 className='status'>{props.status}</h4>
      { tags }
      <h5
        className='delete'
        onClick={()=> props.removeResolution(props.id)}
      >X</h5>
    </div>
  );
}

export default Resolution;