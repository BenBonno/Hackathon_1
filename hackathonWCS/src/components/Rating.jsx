import React from "react";

function Rating({ rating }) {
  function howManyStars(ratingNumber) {
    const fullStars = Math.ceil(ratingNumber);
    const starsArray = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < fullStars) {
        starsArray.push({ id: i, value: 1 });
      } else {
        starsArray.push({ id: i, value: 0 });
      }
    }
    return starsArray;
  }
  // penser a rajouter props.rating dans howmanystars
  const totalColoredStars = howManyStars(rating);
  return (
    <div>
      {totalColoredStars.map((star) =>
        star.value === 1 ? (
          <span className="text-xl text-orange-400" key={star.id}>
            &#9733;
          </span>
        ) : (
          <span key={star.id} className="text-xl">
            &#9733;
          </span>
        )
      )}
    </div>
  );
}

export default Rating;
