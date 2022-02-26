import ReviewCard from "./ReviewCard";

const ReviewsList = ({reviews}) => {
    const reviewsList = reviews.map((review) =>{
        return <ReviewCard review={review} key={review._id}/>
    });
    
    return (
        <>
            {reviewsList}
        </>
    );

}

export default ReviewsList;