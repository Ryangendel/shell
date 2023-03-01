import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import db from "./utils/giftdb"
import './App.css';
import ProductList from './pages/ProductList';
import HomePage from "./pages/Home"
import ItemDetail from "./pages/ItemDetail"
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import 'bootstrap/dist/css/boostrap.css';

function App() {

  const [gifts, setGifts] = useState(db.gifts)
  console.log("GIFTS BELOW======")
  console.log(gifts)

  useEffect(()=>{
    // fetch("https://api.chucknorris.io/jokes/random")
    //   .then(data=>data.json())
    //   .then(cleanData=>{
    //     console.log('-----------')
    //     console.log(cleanData)
    //     console.log('-----------')
    //   })

      axios.get("https://api.chucknorris.io/jokes/random")
      .then(data=>{
        console.log(data)
        console.log(data.data.value)
      })
  },[])

  return (
        <div>
          <Router>
            <Routes>
              <Route path="/itemdetail/:productid" element={<ItemDetail/>} />
              <Route path="/allitems" element={<ProductList productList={gifts} setGifts={setGifts}/>} />
              <Route path="/" element={<HomePage/>} />
            </Routes>
          </Router>
        </div>
  );
}


//{productList:[...Products], numberofvisits:4, dogname="Runa"}


// function ProductList(props) {
//   console.log("-----------")
//   console.log(props)
//   console.log("-----------")
//   return (
//       <div>
//           <Header />
//           {props.productList.map((item, index) => {
//               return (
//                   <ItemCard item={item} index={index}/>
//                   // <p key={`${index}`}>
//                   //     {anObjectMapped.product} 
//                   // </p>
//               );
//           })
//           }
//           <Footer />
//       </div>
//   );
// }
export default App;
