import ReactDOM from "react-dom";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./style.css";

const CardFlip = ({ title, description, author }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flipCardContainer">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        containerStyle={{ height: "100%" }}
      >
        <div className="flipCardFront">
          <img src="book.png" alt="" width="150px" height="150px" />
          <h3>{title} </h3>
          <button className="button" onClick={handleClick}>
            Click to flip
          </button>
        </div>

        <div className="flipCardBack">
          <h3>{author} </h3>
          <p>{description} </p>
          <button className="button" onClick={handleClick}>
            Click to flip
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default CardFlip;
