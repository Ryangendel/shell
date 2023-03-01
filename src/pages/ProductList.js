import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SingleItem from "../components/SingleItem"

function ProductList(props) {
    // useEffect(()=>{
    //     console.log("-----------XXXXXXXX")
    //     props.setGifts([...props.productList, {product:"napkins", brand:"No idea", price: 10, id:4, quantity:99, color:"blue"}])
    //     console.log("-----------XXXXXX")
    // },[])
    
    return (
        <div>
            <Header />
            {props.productList.map((item, index) => {
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
