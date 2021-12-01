import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { technologyPick } from '../../../store/actions';
import data from '../../../helpers/data';
import TechnologyCard from './TechnologyCard/TechnologyCard';

import './TechnologyPage.scss';


const TechnologyPage = () => {

  const technologyState = useSelector((state) => state.technologyReducer.technology);

  console.log(technologyState);

  const dispatch = useDispatch();

  const selectTechnology = (technology) => {
    dispatch(technologyPick(technology));
  }

  const technologyNav = technologyState ? technologyState : data.technology[0];
  console.log(technologyNav);

  const showActiveLaunchVehicle = () => {
    if (technologyNav.name === "Launch vehicle") {
      return 'li-active'
    }
  }

  const showActiiveSpaceport = () => {
    if (technologyNav.name === "Spaceport") {
      return 'li-active'
    }
  }
  const showActiveSpaceCapsule = () => {
    if (technologyNav.name === "Space capsule") {
      return 'li-active'
    }
  }

  return (
    <section className='technology-page-bacground'>
      <h3 className='page-header'>
        <span>03</span>space lounch 101
      </h3>
      <div className='technology-container'>

        <ul className='technology-nav-container'>
          <li
            onClick={() => selectTechnology(data.technology[0])}
            className={`${ showActiveLaunchVehicle() } technology-li`}
          >
            <div className='technology-number'>1</div>
            <div className='round'></div>
          </li>
          <li
            onClick={() => selectTechnology(data.technology[1])}
            className={`${ showActiiveSpaceport() } technology-li`}
          >
            <div className='technology-number'>2</div>
            <div className='round'></div>
          </li>
          <li
            onClick={() => selectTechnology(data.technology[2])}
            className={`${ showActiveSpaceCapsule() } technology-li`}

          >3
            {/* <div className='technology-number'>3</div>
            <div className='round'></div> */}
          </li>
        </ul>
        <div >
          <TechnologyCard
            technology={technologyNav}
          />
        </div>

      </div>
    </section>
  )
}

export default TechnologyPage
