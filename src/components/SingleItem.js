import React, { useState, useEffect } from "react";

function SingleItem(x) {

    return (
        <div>
        <h1>YOUR SINGLE ITEM IS HERE: {x.brandName} and my dog's name is {x.dogName}</h1>
        </div>
    );
}

export default SingleItem;