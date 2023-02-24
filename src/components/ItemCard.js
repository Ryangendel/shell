import React, { useState, useEffect } from "react";

function ItemCard(props) {
    console.log(props)
    return (
        <div>
            <p key={`${props.index}`}>

                <div>
                Item: {props.item.product}
                </div>
                <div>
                Brand: {props.item.brand}
                </div>
                <div>
                ${props.item.price}
                </div>
                <div>
                sku: #{props.item.id}
                </div>
                <div>------------------</div>
            </p>
        </div>
    );
}

export default ItemCard;