import React, { useState, useEffect } from "react";

function SingleItem(props) {

    return (
        <div>
        <h1>YOUR SINGLE ITEM IS HERE: {props.brandName} and my dog's name is {props.dogName}</h1>
        </div>
    );
}

export default SingleItem;