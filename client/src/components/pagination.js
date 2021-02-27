import React from 'react'; 
import './pagination.css';

export const Pagination = ({videosPerPage, totalVideos, paginate}) => {
  const pageNumbers = [];

  for (let i=1; i<= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <div className="pagination">
        {pageNumbers.map(number => (
          <div key={number} className="page-btn" onClick={() => paginate(number)}>
            {number}
          </div>
        ))}
      </div>
    </div>
  )

}