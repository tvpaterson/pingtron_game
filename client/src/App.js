import './App.css';
import {useState, useEffect} from 'react';
import ReviewsList from './components/ReviewsList';
import { deleteReview } from './components/ReviewService';
import { postReview } from './components/ReviewService';

import {getReviews} from './components/ReviewService';

function App() {

  const[reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((data) =>{
      console.log(data);
      setReviews(data);
    });
  }, []);

  const addReview = (review) => {
    let temp = reviews.map(r => r);
    temp.push(review);
    setReviews(temp);
  }

  const removeReview = idToDelete => {
        console.log(idToDelete);
        deleteReview(idToDelete);

        setReviews(reviews.filter(review => review._id !== idToDelete));
    }

  return (
    <>
    <h3>PINGTRON</h3>
    {reviews ? <ReviewsList reviews={reviews} removeReview={removeReview}/> : null}
    </>
  );
}

export default App;