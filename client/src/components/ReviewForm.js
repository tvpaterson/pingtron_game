import {useState} from "react";

const ReviewForm = ({addReview}) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    // const onSubmit = (e) =>{
    //     e.preventDefault();
    //     postReview(formData).then((data)=>{
    //         addReview(data);
    //     })
    // }

    return (
        <div id="review-container">

                    <form className="reviewForm">
                        
                        
                        <label>Name:</label>
                        <input onChange={onChange} type="text" name="player_name" required/>
                        
                        <textarea placeholder="Please write a review of our game!"name="comments" maxlength="500"></textarea>
                        
                        
                        <label>Rating:</label>
                        <div className="rating">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label for="star1" title="text">1 star</label>
                        </div>
                        <button value="submit">Post Review</button>
                    </form>
		</div>
    );
}

export default ReviewForm;
