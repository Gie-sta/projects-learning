import React, { useState } from 'react'


const SearchBar = ({ onFormSubmit }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm)
    onFormSubmit(searchTerm)
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Article Search</label>
        <input type="text"
          name="" id=""
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
