import logo from './logo.svg';
import React, {useState} from "react";
import Dogs from "./components/Dogs"
import './App.css';

function App() {

  //const [count, setCount] = useState(0)
  const x = useState(0)

  function changeCount(){
    console.log("inside counter------")
    console.log(x[0])
    console.log("inside counter------")
    var counter = x[0] + 1
    x[1](counter)
  }

  return (
        <div>
          <Dogs name={"Runa"} age={4} breed={"pit"} caretaker={"Ryan"}/>
          <Dogs name={"Hunter"} age={3} breed={"bull"} caretaker={"Vic"}/>
          {/* <Dogs name={"Skadi"} age={2} breed={"yorkshire"} caretaker={"Sarah"}/>
          <Dogs name={"Odie"} age={9} breed={"nice"} caretaker={"John"}/>
          <Dogs name={"Mickey"} age={4} breed={"pit"} caretaker={"Steve"}/> */}
          <button onClick={changeCount}>increase number by one</button>
          <h1>{x[0]}</h1>
          <h3>is hte best dog</h3>
        </div>
  );
}

export default App;
