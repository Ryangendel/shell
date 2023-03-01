import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard"

function ProductList(props) {

    return (
        <div>
            {props.productList.map((item, index) => {
                return (
                    <ItemCard item={item} index={index}/>
                    // <p key={`${index}`}>
                    //     {anObjectMapped.product} 
                    // </p>
                );
            })
            }
        </div>
    );
}

export default ProductList;
