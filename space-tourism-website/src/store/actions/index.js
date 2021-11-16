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