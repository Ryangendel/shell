import React, { useState, useEffect } from "react";

function ItemCard(props) {

    return (
        <div>
            <p key={`${props.index}`}>
                {props.item.product}
                {props.item.brand}
                {props.item.price}
                {props.item.id}
            </p>
        </div>
    );
}

export default ItemCard;