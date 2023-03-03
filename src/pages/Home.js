import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {useRegistryContext} from "../utils/giftContext"

function HomePage(props) {
    const {user, joke, setUser} = useRegistryContext()
    const [firstName, setFirstName] = useState()


    return (
        <div>
            Welcome to the registry very important {user} see the gifts <Link className="btn-primary" to={"/allitems"}>here</Link>
            <h3>{joke}</h3>
        </div>
    );
};

export default HomePage; 