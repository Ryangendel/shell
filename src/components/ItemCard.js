import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function ItemCard(props) {

    console.log("&&&&&&&&&")
    console.log(props)
    console.log("&&&&&&&&&")
    return (

        <div>
            <p> 

            <div>
             <Link className="btn" to={`/itemdetail/${props.item.id}`}>Item: {props.item.product}</Link>
            </div>

            <div>
               Brand:  {props.item.attributes.brand}
            </div>

            <div>
                ${props.item.attributes.price}
            </div>

            <div>
               Sku:  {props.item.id}
            </div>

            <div>
               Color:  {props.item.attributes.color}
            </div>

            <div>
               Item Name:  {props.item.attributes.item_name}
            </div>

            <div>
                -----------------
            </div>

            </p>
        </div>
    );
}

export default ItemCard;