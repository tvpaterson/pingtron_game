import './App.css';
import {useState, useEffect} from 'react';
import ReviewsList from './components/ReviewsList';
import ReviewForm from './components/ReviewForm';

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

  const removeReview = (id) => {
    const temp = reviews.map(r => r);
    const indexToDel = temp.map(r => r._id).indexOf(id);
    console.log(indexToDel);
    
    temp.splice(indexToDel, 1);
    setReviews(temp);
    }

  return (
    <>
    	<div id="logo-container">
	      <img src="/image/pintronlogo.png" id="logo"/>
	    </div>
    <h3>PINGTRON</h3>
    <ReviewForm/>
    {reviews ? <ReviewsList reviews={reviews} removeReview={removeReview}/> : null}
    </>
  );
}

export default App;