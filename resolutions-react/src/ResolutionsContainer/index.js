import React from 'react';
import Resolution from '../Resolution';
import '../App/App.css';

const ResolutionsContainer = ({resolutions, removeResolution}) => {

  const cards = resolutions.map( res => {
    return <Resolution key={res.id} {...res} removeResolution={removeResolution}/>
  })

  return(
    <div>
      {cards}
    </div>
  );
}

export default ResolutionsContainer;