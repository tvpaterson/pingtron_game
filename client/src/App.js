import './App.css';
import {useState, useEffect} from 'react';
import ReviewsList from './components/ReviewsList';
import ReviewForm from './components/ReviewForm';
import Game from './components/Game';
import ScoreBoard from './components/ScoreBoard';
import ReactAudioPlayer from 'react-audio-player';

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
    <ReviewForm addReview={addReview}/>
    {reviews ? <ReviewsList reviews={reviews} removeReview={removeReview}/> : null}
    <ScoreBoard players={reviews} />
    <footer>&#169; Sneed Co. All Rights Reserved</footer>
    <div className="audiothing">
      <ReactAudioPlayer
  src={require("./sounds/PingtronRealFlattened.mp3")}
  autoPlay
  controls
/>
</div>
    </>
  );
}

export default App;