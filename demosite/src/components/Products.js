import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Banner from './Banner';
import { fetchMeteo } from '../store/actions/index'

import './Products.scss'

const Products = () => {

  const meteoWeather = useSelector((state) => state.meteoReducer.weather)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeteo())
  }, [dispatch])



  return (
    <div className='products-container'>
      <h1>PRODUCTS</h1>
      <h4>OFFERS TODAY</h4>
      <div className='offers-container'>
        <Banner meteoWeather={meteoWeather} />
        <div className='best'>
          <img src="../imgs/best-coffee.jpg" alt="" />
          <h3>THE BEST COFFEE</h3>
        </div>
        <div className='best'>
          <img src="../imgs/top-books.jpg" alt="" />
          <h3>TOP 100 BOOKS</h3>
        </div>
      </div>
    </div>
  )
}

export default Products
