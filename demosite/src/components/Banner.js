import React from 'react'

import './Products.scss'

const Banner = ({ meteoWeather }) => {
  console.log(meteoWeather)

  const weathers = [{ 'sleet': 'snowflake' }, { 'light-snow': 'snowflake' }, { 'moderate-snow': 'snowflake' }, { 'heavy-snow': 'snosnowflake' }, { 'clear': 'sunglasses' }, { 'isolated-clouds': 'sunglasses' }, { 'scattered-clouds': 'sunglasses' }, { 'na': 'sunglasses' }, { 'overcast': 'umbrella' }, { 'light-rain': 'umbrella' }, { 'moderate-rain': 'umbrella' }, { 'heavy-rain': 'umbrella' }, { 'fog': 'umbrella' }];

  const showWeatherLogo = (meteoWeather) => {

    if (!meteoWeather) {
      return (
        <img src='../imgs/spinner.gif' alt="" className='banner-img' />
      )
    }
    for (let weather of weathers) {
      if (meteoWeather === Object.keys(weather)[0]) {
        // console.log(Object.keys(weather)[0]);
        const weatherLogo = Object.values(weather).toString();
        // console.log(weatherLogo);
        const imagePath = `../imgs/${ weatherLogo }.svg`
        // console.log(imagePath);
        return (
          <img src={imagePath} alt="" className='banner-img' />
        )
      }

    }
  }




  return (
    <div className='banner'>
      {showWeatherLogo(meteoWeather)}
    </div>
  )
}

export default Banner
