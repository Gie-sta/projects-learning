import React from 'react';
import './Image.css';


const Image = () => {
  return (
    <div className='img-div'>
      <img className="logo-image" src="/logo.png" alt="" />
      <img className="main-image" src="/image.png" alt="" />

    </div>
  )
}

export default Image
