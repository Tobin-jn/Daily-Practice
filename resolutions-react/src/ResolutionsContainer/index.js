import React from 'react';
import Resolution from '../Resolution';

const ResolutionsContainer = ({resolutions}) => {

  const cards = resolutions.map( res => {
    return <Resolution key={res.id} {...res} />
  })

  return(
    <div>
      {cards}
    </div>
  );
}

export default ResolutionsContainer;