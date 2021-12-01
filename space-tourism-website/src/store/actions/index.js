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

//bacground color
export const defineBodyBackground = (background) => {
  return {
    type: "DEFINE_BODY_BACKGROUND",
    payload: background
  }
}

//destination 
export const destinationPick = (destination) => {
  return ({
    type: 'DESTINATION_PICK',
    payload: destination
  })
}

//crew 
export const crewPick = (crew) => {
  return ({
    type: 'CREW_PICK',
    payload: crew
  })
}
//technology 
export const technologyPick = (technology) => {
  return ({
    type: 'TECHNOLOGY_PICK',
    payload: technology
  })
}