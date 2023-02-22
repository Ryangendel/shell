import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import Dogs from "./components/dogs/Dogs"
import Joke from "./components/joke/Joke"
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState({})

  useEffect(()=>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then(data => data.json())
    .then(joke=>{
      console.log("*******")
      console.log(joke)
      console.log("*******")
      setJoke(joke)})
    },[count])

  function changeCount(){
    var counter = count + 1
    setCount(counter)
  }

 //props === bulldog:"CHUCK NORRIS JOKE HERE" 

  return (
        <div>
          <Dogs name={"Runa"} age={4} breed={"pit"} caretaker={"Ryan"}/>
          <Dogs name={"Hunter"} age={3} breed={"bull"} caretaker={"Vic"}/>
          <Joke bulldog={joke.value} count={count}/>
          <button onClick={changeCount}>increase number by one</button>
          <h1>{count}</h1>
          {/* <h3>is hte best dog</h3>
          <h2>{joke.value}</h2> */}
        </div>
  );
}

export default App;
