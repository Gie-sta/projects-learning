import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { destinationPick } from '../../../store/actions';


import data from '../../../helpers/data';
import Destination from './DestinationCard/DestinationCard';

import './DestinationPage.scss'

const DestinationPage = () => {

  const destinationState = useSelector((state) => state.destinationReducer.destination);

  console.log(destinationState);

  const dispatch = useDispatch();
  const selectDestination = (destination) => {
    dispatch(destinationPick(destination));
  }

  const destinationNav = destinationState ? destinationState : data.destinations[0];

  const showActiveMoon = () => {
    if (destinationNav.name === 'Moon') {
      return 'li-active'
    }
  }

  const showActiveMars = () => {
    if (destinationNav.name === "Mars") {
      return 'li-active'
    }
  }
  const showActiveEuropa = () => {
    if (destinationNav.name === "Europa") {
      return 'li-active'
    }
  }
  const showActiveTitan = () => {
    if (destinationNav.name === "Titan") {
      return 'li-active'
    }
  }




  return (
    <section className='destination-page-bacground'>
      <h3 className='page-header'>
        <span>01</span>pick your destination
      </h3>
      <div className='destination-container'>
        <div className='destination-nav-container'>
          <div className='empty'></div>
          <ul className='destination-nav'>
            <li
              onClick={() => selectDestination(data.destinations[0])}
              className={showActiveMoon()}
            >moon</li>
            <li
              onClick={() => selectDestination(data.destinations[1])}
              className={showActiveMars()}
            >mars</li>
            <li
              onClick={() => selectDestination(data.destinations[2])}
              className={showActiveEuropa()}
            >europa</li>
            <li
              onClick={() => selectDestination(data.destinations[3])}
              className={showActiveTitan()}
            >titan</li>
          </ul>
        </div>

        <div >
          <Destination
            destination={destinationNav} />
        </div>
      </div>
    </section>
  )
}

export default DestinationPage
