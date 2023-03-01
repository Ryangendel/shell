import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import db from "./utils/giftdb"
import './App.css';
import ProductList from './pages/ProductList';
import HomePage from './pages/Home';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [gifts, setGifts] = useState(db.gifts)

  useEffect(()=>{
    axios.get("https://api.chucknorris.io/jokes/random")
    .then(data=>{
      console.log(data.data.value)
    })
  },[])


  return (
        <div>
          <ProductList productList={gifts}/>
          {/* <HomePage /> */}
        </div>
  );
}

export default App;
