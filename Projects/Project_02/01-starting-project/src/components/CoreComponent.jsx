import React from 'react';

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} atl={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
