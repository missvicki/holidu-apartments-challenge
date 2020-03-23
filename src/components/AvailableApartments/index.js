import React from 'react';
import './available.css';

const AvailableApartments = ({ totalResults }) => (
  <div className="available__container">
    <div className="left__results">
      <div className="results__title">Available Apartments</div>
      <div className="available-results">{`Showing ${totalResults} results`}</div>
    </div>
  </div>
);

export default AvailableApartments;