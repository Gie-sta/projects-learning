import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { crewPick } from '../../../store/actions';
import data from '../../../helpers/data';
import CrewCard from './CrewCard/CrewCard';

import './CrewPage.scss';


const CrewPage = () => {

  const crewState = useSelector((state) => state.crewReducer.crew);

  console.log(crewState);

  const dispatch = useDispatch();
  const selectCrew = (crew) => {
    dispatch(crewPick(crew));
  }

  const crewNav = crewState ? crewState : data.crew[0];
  console.log(crewNav)

  const showActiveMoon = () => {
    if (crewNav.name === "Douglas Hurley") {
      return 'li-active'
    }
  }

  const showActiveMars = () => {
    if (crewNav.name === "Mark Shuttleworth") {
      return 'li-active'
    }
  }
  const showActiveEuropa = () => {
    if (crewNav.name === "Victor Glover") {
      return 'li-active'
    }
  }
  const showActiveTitan = () => {
    if (crewNav.name === "Anousheh Ansari") {
      return 'li-active'
    }
  }

  return (
    <section className='crew-page-bacground'>
      <h3 className='page-header'>
        <span>02</span>pick your destination
      </h3>
      <div className='crew-container'>
        <div >
          <CrewCard
            crew={crewNav}
          />
        </div>
        <div className='crew-nav-container'>

          <ul className='crew-nav'>
            <li
              onClick={() => selectCrew(data.crew[0])}
              className={showActiveMoon()}
            >1</li>
            <li
              onClick={() => selectCrew(data.crew[1])}
              className={showActiveMars()}
            >2</li>
            <li
              onClick={() => selectCrew(data.crew[2])}
              className={showActiveEuropa()}
            >3</li>
            <li
              onClick={() => selectCrew(data.crew[3])}
              className={showActiveTitan()}
            >4</li>
          </ul>
        </div>

      </div>


    </section>
  )
}

export default CrewPage
