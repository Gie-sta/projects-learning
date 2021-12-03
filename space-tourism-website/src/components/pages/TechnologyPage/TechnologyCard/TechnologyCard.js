import React from 'react';
import { useMediaQuery } from 'react-responsive'

import imageLaunchVehiclePortrait from '../../../../assets/technology/image-launch-vehicle-portrait.jpg';
import imageSpaceportPortrait from '../../../../assets/technology/image-spaceport-portrait.jpg';
import imageSpaceCapsulePortrait from '../../../../assets/technology/image-space-capsule-portrait.jpg';
import imageLaunchVehicleLandscape from '../../../../assets/technology/image-launch-vehicle-landscape.jpg';
import imageSpaceportLandscape from '../../../../assets/technology/image-spaceport-landscape.jpg';
import imageSpaceCapsuleLandscape from '../../../../assets/technology/image-space-capsule-landscape.jpg';

import './TechnologyCard.scss';

const TechnologyCard = ({ technology }) => {
  console.log(technology.name);

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024.1px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  //show image Dekstop or Laptop
  const showImagePortrait = (technology) => {
    if (technology.name === 'Launch vehicle') {
      return imageLaunchVehiclePortrait;
    } else if (technology.name === 'Spaceport') {
      return imageSpaceportPortrait;
    } else {
      return imageSpaceCapsulePortrait;
    }
  }
  //Show image Tablet or mobile
  const showImageLandscape = (technology) => {
    if (technology.name === 'Launch vehicle') {
      return imageLaunchVehicleLandscape;
    } else if (technology.name === 'Spaceport') {
      return imageSpaceportLandscape;
    } else {
      return imageSpaceCapsuleLandscape;
    }
  }

  return (
    <div className='technology-card-container'>
      <div className='technology-describtion-container'>
        <h5>The terminology...</h5>
        <h2 className='technology-header'>{technology.name}</h2>
        <p className='technology-text'>{technology.description}</p>
      </div>
      {isDesktopOrLaptop && <img src={showImagePortrait(technology)} alt={technology.name} className='technology-img-portrait' />}
      {isTabletOrMobile && <img src={showImageLandscape(technology)} alt={technology.name} className='technology-img-landscape' />}
    </div>
  )
}

export default TechnologyCard
