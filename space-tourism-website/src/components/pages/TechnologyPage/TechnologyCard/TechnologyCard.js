import React from 'react';
import imageLaunchVehicle from '../../../../assets/technology/image-launch-vehicle-portrait.jpg';
import imageSpaceport from '../../../../assets/technology/image-spaceport-portrait.jpg';
import imageSpaceCapsule from '../../../../assets/technology/image-space-capsule-portrait.jpg';

import './TechnologyCard.scss';

const TechnologyCard = ({ technology }) => {
  console.log(technology.name)

  const showImage = (technology) => {
    if (technology.name === 'Launch vehicle') {
      return imageLaunchVehicle;
    } else if (technology.name === 'Spaceport') {
      return imageSpaceport;
    } else {
      return imageSpaceCapsule;
    }
  }

  return (
    <div className='technology-card-container'>
      <div className='technology-describtion-container'>
        <h5>The terminology</h5>
        <h2 className='technology-header'>{technology.name}</h2>
        <p className='technology-text'>{technology.description}</p>
      </div>
      <img src={showImage(technology)} alt={technology.name} className='technology-img' />
    </div>
  )
}

export default TechnologyCard
