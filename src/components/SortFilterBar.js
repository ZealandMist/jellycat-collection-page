import React from 'react';

const SortFilterBar = ({ onSortChange, onFilterChange }) => (
  <div className="sort-filter-bar flex justify-between">
    <select onChange={onSortChange}>
      <option value="price">Sort by Price</option>
      <option value="rating">Sort by Rating</option>
    </select>
    <input className="border border-solid" type="text" placeholder="Search..." onChange={onFilterChange} />
  </div>
);

export default SortFilterBar;
