import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const[players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((data) =>{
      console.log(data);
      setPlayers(data);
    });
  }, []);

  const addPlayer = (player) => {
    let temp = players.map(p => p);
    temp.push(player);
    setPlayers(temp);
  }

  const removePlayer = (id) => {
    const temp = players.map(p => p);
    const indexToDel = temp.map(p => p._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setPlayers(temp);
  }

  return (
    <>
    <h3>PINGTRON</h3>
    <p>COMING SOON!</p>
    </>
  );
}

export default App;
