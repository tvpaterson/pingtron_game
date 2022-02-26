import './App.css';
import {useState, useEffect} from 'react';
import ReviewsList from './components/ReviewsList';

import {getReviews} from './components/ReviewService';

function App() {

  const[reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((data) =>{
      console.log(data);
      setReviews(data);
    });
  }, []);

  return (
    <>
    <h3>PINGTRON</h3>
    {reviews ? <ReviewsList reviews={reviews}/> : null}
    </>
  );
}

export default App;