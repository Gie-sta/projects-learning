import React from 'react';

import imageDouglas from '../../../../assets/crew/image-douglas-hurley.webp';
import imageMark from '../../../../assets/crew/image-mark-shuttleworth.webp';
import imageVictor from '../../../../assets/crew/image-victor-glover.webp';
import imageAnousheh from '../../../../assets/crew/image-anousheh-ansari.webp';

import './CrewCard.scss'

const CrewCard = ({ crew }) => {
  console.log(crew.name)

  const showImage = (crew) => {
    if (crew.name === 'Douglas Hurley') {
      return imageDouglas;
    } else if (crew.name === 'Mark Shuttleworth') {
      return imageMark;
    } else if (crew.name === 'Victor Glover') {
      return imageVictor;
    } else {
      return imageAnousheh;
    }
  }

  return (
    <div className='crew-card-container'>
      <div className='crew-card-describtion'>
        <h3 className='crew-role-header'>{crew.role}</h3>
        <h2 className='crew-name-header'>{crew.name}</h2>
        <p className='crew-card-tex'>{crew.bio}</p>
      </div>
      <div className='crew-img-container'>

        <img src={showImage(crew)} alt={crew.name} className='crew-img' />
      </div>
    </div>
  )
}

export default CrewCard
