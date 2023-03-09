import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SingleItem from "../components/SingleItem"
import axios from 'axios';

function ProductList(props) {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        // console.log("-----------XXXXXXXX")
        // props.setGifts([...props.productList, {product:"napkins", brand:"No idea", price: 10, id:4, quantity:99, color:"blue"}])
        // console.log("-----------XXXXXX")
        axios.get("http://localhost:1337/api/items")
        .then(data=>{
          console.log("DATABASE INFO--------------------")
          console.log(data.data.data)
          console.log("DATABASE INFO--------------------")
          setProducts(data.data.data)
          // console.log(data.data.value)    
        })
    },[])
    
    return (
        <div>
            <Header />
            {products.map((item, index) => {
                return (
                    <ItemCard item={item} index={index}/>
                    // <p key={`${index}`}>
                    //     {anObjectMapped.product} 
                    // </p>
                );
            })
            }

           {/* <SingleItem brandName={props.productList[1].brand} dogName={"Runa"} /> */}
            <Footer />
        </div>
    );
}

export default ProductList;
