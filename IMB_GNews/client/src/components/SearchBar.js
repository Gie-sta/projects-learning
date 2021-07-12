import React from "react";
import './SearchBar.css';



const SearchBar = ({ onSubmitHandler, searchTerm, onInputChange, error }) => {
  function validate(searchTerm) {
    if (searchTerm) {
      if (!searchTerm.match("^[A-Za-z0-9 ]+$")) {
        return <div className='text-danger'>Invalid search term! You can enter just letters, numbers and space in search field </div>
      }
    }
  }

  return (
    <div className='header-div'>
      <h1>Search for articles</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          className='search-input'
          type="text"
          name="searchField"
          id="searchField"
          maxLength='40'
          value={searchTerm}
          onChange={onInputChange} />
        <button type="submit" className="btn btn-secondary btn-search">Search</button>
        {validate(searchTerm)}
        {error && (
          <div
            className="text-danger" >
            Sorry, no results were found. Try again!
          </div>
        )}
      </form>
      <hr className='hr-style' />
    </div >
  )
}

export default SearchBar
