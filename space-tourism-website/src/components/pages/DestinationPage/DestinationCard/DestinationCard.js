import React from 'react';


import imageMoon from '../../../../assets/destination/image-moon.webp';
import imageMars from '../../../../assets/destination/image-mars.webp';
import imageEuropa from '../../../../assets/destination/image-europa.webp';
import imageTitan from '../../../../assets/destination/image-titan.webp';

import './DestinationCard.scss'

const Destination = ({ destination }) => {
  // if (!destination) {
  //   destination = data.destinations[0];
  // }
  console.log(destination.name)

  const showImage = (destination) => {
    if (destination.name === 'Moon') {
      return imageMoon;
    } else if (destination.name === 'Mars') {
      return imageMars;
    } else if (destination.name === 'Europa') {
      return imageEuropa;
    } else {
      return imageTitan;
    }
  }

  return (
    <div className='destination-card'>
      <img src={showImage(destination)} alt={destination.name} className='destination-img' />
      <div>
        <div className='destination-describtion'>
          <h2>{destination.name}</h2>
          <p className='destination-describtion-text'>{destination.description}</p>
          <hr />
          <div className='destination-describtion-grid'>
            <div className='grid-distance'>
              <h5>avg. distance</h5>
              <p className='destination-parameters'>{destination.distance}</p>
            </div>
            <div className='grid-travel-time'>
              <h5>est. travel time</h5>
              <p className='destination-parameters'>{destination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
