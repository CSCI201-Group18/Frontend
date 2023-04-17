import React, { useState } from "react";

const DynamicStarRating = ({ rating, onClick }) => {
  const starStyles = {
    color: "#FFC72C",
    fontSize: "40px",
    marginRight: "5px",
  };

  const emptyStarStyles = {
    color: "#D9D9D9",
    fontSize: "40px",
    marginRight: "5px",
  };

  const halfStarStyles = {
    color: "#FFC72C",
    fontSize: "40px",
    marginRight: "5px",
    opacity: "0.5",
  };

  const [hoverRating, setHoverRating] = useState(0);

  const handleStarHover = (event, rating) => {
    setHoverRating(rating);
  };

  const handleStarClick = (event, rating) => {
    onClick(rating);
  };

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span
          key={i}
          style={starStyles}
          onClick={(event) => handleStarClick(event, i)}
        >
          ★
        </span>
      );
    } else {
      let starStyle = emptyStarStyles;
      if (i <= hoverRating) {
        starStyle = halfStarStyles;
      }
      stars.push(
        <span
          key={i}
          style={starStyle}
          onClick={(event) => handleStarClick(event, i)}
          onMouseOver={(event) => handleStarHover(event, i)}
          onMouseOut={() => setHoverRating(0)}
        >
          ★
        </span>
      );
    }
  }

  return <div>{stars}</div>;
};

export default DynamicStarRating;
