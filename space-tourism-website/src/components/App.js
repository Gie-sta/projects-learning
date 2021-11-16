import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import HomePage from './pages/HomePage';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import TechnologyPage from './pages/TechnologyPage';
// import history from '../history';
import { useDispatch, useSelector } from "react-redux";

import './App.scss';

const App = () => {



  // .body-backround {
  //   background: url(../assets/home/background-home-desktop.jpg) no-repeat center center/ cover;
  //   height: 100vh;
  //   color:#ffffff;
  // }

  // //mobile
  // @media only screen and (max-width:480px) {
  //   .body-backround {
  //     background: url(../assets/home/background-home-mobile.jpg) no-repeat center center/ cover;
  //     // height: 100vh;
  //   }
  // }

  // //tablet
  // @media only screen and (min-width:481.1px) and (max-width: 1024px) {
  //   .body-backround {
  //     background: url(../assets/home/background-home-tablet.jpg) no-repeat center center/ cover;
  //     // height: 100vh;
  //   }
  // }



  const bacgroundImg = useSelector((state) => state.backgroundReducer.background);
  console.log(bacgroundImg);
  // const defineBackgroundStyle = (backgroundImg) => {
  //   console.log(bacgroundImg);
  //   if (backgroundImg === "destination") {
  //     console.log(`bacground is ${ bacgroundImg }`)
  //     // return `background: url(../assets/destination/background-destination-desktop.jpg) no-repeat center center/ cover`
  //   } else {
  //     if (backgroundImg === undefined) {
  //       // return `url(../assets/destination/background-home-desktop.jpg) no-repeat center center/ cover`
  //       console.log(`bacground is  ${ bacgroundImg }`)

  //     }
  //   }
  // }


  return (
    // style={{ background: url(../ assets / destination / background - home - desktop.jpg) }}


    <BrowserRouter>
      <div className='body-backround'>
        {/* <Router history={history}> */}
        <Navbar />
        <MobileMenu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/destination' element={<DestinationPage />} />
          <Route path='/crew' element={<CrewPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
        </Routes>
      </div >
    </BrowserRouter>
  )
}

export default App
