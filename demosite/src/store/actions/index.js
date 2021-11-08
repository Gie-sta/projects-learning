import meteo from '../../apis/meteo'

export const showMobileMenu = () => {
  return ({
    type: "SHOW_MOBILE_MENU",
  })
}
export const hideMobileMenu = () => {
  return ({
    type: "HIDE_MOBILIE_MENU",
  })
}



export const fetchMeteo = () => async dispatch => {
  try {
    const response = await meteo.get('/places/kaunas/forecasts/long-term');
    // console.log(response.data.forecastTimestamps[0].conditionCode)
    dispatch({
      type: 'FETCH_METEO',
      payload: response.data.forecastTimestamps[0].conditionCode
    });

  }
  catch (error) {
    dispatch({
      type: 'FETCH_METEO',
      payload: error
    });
  }
}
