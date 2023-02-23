import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import db from "./utils/giftdb"
import './App.css';
import ProductList from './pages/ProductList';

function App() {

  const [gifts, setGifts] = useState(db.gifts)

  return (
        <div>
          <ProductList productList={gifts}/>
        </div>
  );
}

export default App;
