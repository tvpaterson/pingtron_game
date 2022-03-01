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
    <canvas id="myCanvas" width="1080" height="600"></canvas>
    <script src="./components/Game.js"></script>
    <div id="assets">
      <img id="paddle" src="./paddle.png" alt="paddle-sprite"/>
      <img id="disc" src="./disc.png" alt="disc-sprite"/>
      <img id="brick" src="./brick.png" alt="brick-sprite"/>
      <img id="title-logo" src="./logo.png" alt="logo-sprite" width="500"/>
      <img id="easter-egg" src="./ahegao.jpeg" alt="mystery"/>
    </div>
    <div>
      <ScoreBoard players={reviews} />
      <div class="review-main-container">
        <div class="form-container">
          <ReviewForm addReview={addReview}/>
        </div>
        <div class="reviews-list-container">
          {reviews ? <ReviewsList reviews={reviews} removeReview={removeReview}/> : null}
        </div>
      </div>
    </div>
    {/* <audio controls loop>
      <source src="./PingtronRealFlattened.mp3" type="audio/mpeg"/>
    </audio> */}
        <footer id="footer">&#169; Sneed Co. All Rights Reserved</footer>
    </>
  );
}

export default App;