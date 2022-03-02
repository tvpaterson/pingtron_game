const ReviewCard = ({ review, removeReview, alterReview }) => {
  
  const handleDelete = () => {
          removeReview(review._id);
  }

  const handleUpdate = () => {
    let verified_user = `${review.name} ✔`

    alterReview({
      _id: review._id,
      name: verified_user,
      score: review.score,
      rating: review.rating,
      review: review.review,
    })
  }

  const starRating = () => {
    const star = "⭐️";
    return star.repeat(review.rating);
  };

  return (
    <>
      <h1>{review.name}</h1>
      <h2>{review.verified}</h2>
      <p>{review.review}</p>
      {starRating()}
      <button onClick={handleDelete}> 🗑 </button>
      <button id="edit-review" onClick={handleUpdate}>Verify Review</button>
      <hr></hr>
    </>
  );
};

export default ReviewCard;
