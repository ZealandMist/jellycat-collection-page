import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination text-center">
    <button className="m-2 p-2" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
    <span>{currentPage} / {totalPages}</span>
    <button className="m-2 p-2" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
  </div>
);

export default Pagination;
