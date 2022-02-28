import './App.css';
import {useState, useEffect} from 'react';
import ReviewsList from './components/ReviewsList';
import ReviewForm from './components/ReviewForm';
import ScoreBoard from './components/ScoreBoard';

import {getReviews, deleteReview, postReview} from './components/ReviewService';

function App() {

  const[reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((data) =>{
      console.log(data);
      setReviews(data);
    });
  }, []);

  const addReview = (review) => {
    postReview(review)
      .then(savedReview => setReviews([ ...reviews, savedReview ]));
  };

  const removeReview = idToDelete => {
        console.log(idToDelete);
        deleteReview(idToDelete);

        setReviews(reviews.filter(review => review._id !== idToDelete));
    }

  return (
    <>
    	<div id="logo-container">
	      <img src="/image/pintronlogo.png" id="logo" alt="chungus"/>
	    </div>
    <h3>PINGTRON</h3>
    <ReviewForm addReview={addReview}/>
    {reviews ? <ReviewsList reviews={reviews} removeReview={removeReview}/> : null}
    <ScoreBoard/>
    </>
  );
}

export default App;