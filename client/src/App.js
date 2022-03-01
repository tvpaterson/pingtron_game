import './App.css';
import {useState, useEffect} from 'react';
import ReviewsList from './components/ReviewsList';
import ReviewForm from './components/ReviewForm';
import ScoreBoard from './components/ScoreBoard';
import Game from './components/Game';

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
	      <img src="/image/pingtronlogo.png" id="logo" alt="chungus"/>
	    </div>
    <canvas id="myCanvas" width="1080" height="600"></canvas>
    <script src="./components/Game.js"></script>
    <div id="assets">
      <img id="paddleSpriteOne" src="./paddle_1.png" alt="paddle-1-sprite"/>
      <img id="paddleSpriteTwo" src="./paddle_2.png" alt="paddle-2-sprite"/>
      <img id="disc" src="./disc.png" alt="disc-sprite"/>
    </div>
    <ReviewForm addReview={addReview}/>
    {reviews ? <ReviewsList reviews={reviews} removeReview={removeReview}/> : null}
    <ScoreBoard players={reviews} />
    <footer>&#169; Sneed Co. All Rights Reserved</footer>
    </>
  );
}

export default App;