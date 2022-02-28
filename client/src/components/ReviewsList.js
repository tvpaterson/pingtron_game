import ReviewCard from "./ReviewCard";

const ReviewsList = ({ reviews, removeReview }) => {
  const reviewsList = reviews.map((review) => {
    return <ReviewCard review={review} key={review._id} removeReview = {removeReview}/>;
  });

  return(
    <>
    {reviewsList}
    </>
  )
};

export default ReviewsList;
