import React from "react";
import "./style.css";
function PriceFilter({ priceFilter, setPriceFilter }) {
  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor="min-price">
        Min price
        <input
          type="range"
          id="min-price"
          min="0"
          max="999"
          step="2"
          value={priceFilter[0]}
          onChange={(e) => setPriceFilter([e.target.value, priceFilter[1]])}
        />
      </label>
      <label htmlFor="max-price">
        Max price
        <input
          type="range"
          id="max-price"
          min="0"
          max="999"
          step="2"
          value={priceFilter[1]}
          onChange={(e) => setPriceFilter([priceFilter[0], e.target.value])}
        />
      </label>
      <label htmlFor="min-price">
        Min price
        <input
          type="number"
          id="min-price"
          value={priceFilter[0]}
          onChange={(e) => setPriceFilter([e.target.value, priceFilter[1]])}
        />
      </label>
      <label htmlFor="max-price">
        Max price
        <input
          type="number"
          id="max-price"
          value={priceFilter[1]}
          onChange={(e) => setPriceFilter([priceFilter[0], e.target.value])}
        />
      </label>
    </fieldset>
  );
}

export default PriceFilter;
