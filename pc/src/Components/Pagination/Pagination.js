import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber, e) => {
    paginate(pageNumber);
    e.preventDefault();
  }


  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((pageNumber) => {
          return (
            <li key={pageNumber} className="page-item">
              <a
                onClick={(e) => handleClick(pageNumber, e)}
                href="!#" className="page-link">{pageNumber}</a>
            </li>

          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination
