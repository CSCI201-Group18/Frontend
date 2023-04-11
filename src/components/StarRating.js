import React from "react";

const StarRating = ({ rating }) => {
  const filledStars = "★".repeat(Math.floor(rating));
  const emptyStars = "★".repeat(Math.floor(5 - rating));
  const starStyles = {
    color: "#FFC72C",
    fontSize: "40px",
    marginRight: "5px"
  };
  const emptyStarStyles = {
    color: "#D9D9D9",
    fontSize: "40px",
    marginRight: "5px"
  };
  return (
    <div>
      <span style={starStyles}>{filledStars}</span>
      <span style={emptyStarStyles}>{emptyStars}</span>
    </div>
  );
};

export default StarRating;
