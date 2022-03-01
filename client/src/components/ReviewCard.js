const ReviewCard = ({ review, removeReview }) => {
  
  const handleDelete = () => {
          removeReview(review._id);
  }

  const starRating = () => {
    const star = "⭐️";
    return star.repeat(review.rating);
  };

  return (
    <>
      <h1>{review.name}</h1>
      {/* <p>Rating: {review.rating}</p> */}
      <p>{review.review}</p>
      {starRating()}
      <button onClick={handleDelete}> 🗑 </button>
      <hr></hr>
    </>
  );
};

export default ReviewCard;
