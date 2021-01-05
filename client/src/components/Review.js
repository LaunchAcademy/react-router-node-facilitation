import React from 'react';

const Review = ({id, rating, body}) => {
  return(
    <div className="review">
      <h3> Review </h3>
      <p>
        Rating: {rating}
      </p>
      <p>
        Body: {body}
      </p>
    </div>
  )
}

export default Review;
