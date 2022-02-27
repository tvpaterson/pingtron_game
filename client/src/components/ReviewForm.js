import {useState} from "react";

const ReviewForm = ({addReview}) => {

    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
  
    const handleNameChange = (e) => setName(e.target.value);
    const handleRatingChange = (e) => setRating(e.target.value);
    const handleReviewChange = (e) => setReview(e.target.value);

    const onSubmit = e =>{
        e.preventDefault();
        addReview({
            name: name,
            rating: rating,
            review: review
          })
    };

    return (
        <div id="review-container">

                    <form onSubmit={onSubmit} className="reviewForm">
                        
                        
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            required
                            onChange={handleNameChange}
                            />
                        
                        <textarea placeholder="Please write a review of our game!" name="review" value={review} maxLength="500" onChange={handleReviewChange}></textarea>
                        
                        
                        <label>Rating:</label>
                        <div className="rating">
                            <input type="radio" id="star5" name="rating" value="5" onChange={handleRatingChange}/>
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" onChange={handleRatingChange}/>
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" onChange={handleRatingChange}/>
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" onChange={handleRatingChange}/>
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" onChange={handleRatingChange}/>
                            <label htmlFor="star1" title="text">1 star</label>
                        </div>
                        <button type="submit" name="submit" value="Save">Post Review</button>
                    </form>
		</div>
    );
}

export default ReviewForm;
