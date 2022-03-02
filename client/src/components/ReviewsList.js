import ReviewCard from "./ReviewCard";

const ReviewsList = ({ reviews, alterReview, removeReview }) => {
  const reviewsList = reviews.map((review) => {
    return <ReviewCard review={review} key={review._id} alterReview = {alterReview} removeReview = {removeReview}/>;
  });

  return(
    <>
    {reviewsList}
    </>
  )
};

export default ReviewsList;
