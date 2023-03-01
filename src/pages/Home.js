import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function HomePage(props) {

    return (
        <div>
            Welcome to the registry see the gifts <Link className="btn-primary" to={"/allitems"}>here</Link>
        </div>
    );
};

export default HomePage; 