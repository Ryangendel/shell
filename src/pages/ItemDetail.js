import React, { useState, useEffect } from "react";
import db from "../utils/giftdb"
import {useParams} from "react-router-dom";

function ItemDetail(props) {
    var params = useParams()
    var [item, setItem]= useState({})
    console.log("%%%%%%%%%%%%%%")
    console.log(params.productid)

    useEffect(()=>{
        for (let i = 0; i < db.gifts.length; i++) {
            if(db.gifts[i].id == params.productid){
                setItem(db.gifts[i])
            }
          }
    },[])

    return (
        <div>
           THSI SI THE DETAILS PAGE
           <h1>{item.product}</h1>
           <h1>{item.brand}</h1>
           <h1>{item.price}</h1>
           <h1>{item.id}</h1>
        </div>
    );
};

export default ItemDetail; 