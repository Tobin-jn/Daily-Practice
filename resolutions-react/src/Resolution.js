import React from 'react';

const Resolution = (props) => {
  const tags = props.tags.map( tag => {
    return <p>{tag}</p>
  })

  return(
    <div className="resolution">
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <h4>{props.status}</h4>
      { tags }
    </div>
  );
}

export default Resolution;