import React, {createContext, useContext, useState, useEffect} from "react"
import axios from 'axios';

const RegristryContext = createContext()

export const useRegistryContext = () => useContext(RegristryContext)

export function RegistryProvider(props) {
    const [user, setUser] = useState("THE GREAT RBG")
    const [joke, setJoke] = useState()
    
    useEffect(()=>{  
          axios.get("https://api.chucknorris.io/jokes/random")
          .then(data=>{
            // console.log(data)
            // console.log(data.data.value)
            setJoke(data.data.value)
          })
      },[])
    
     

      var moreGifts = [
        {product:"wine glasses1", brand:"ikea1", price:2001, id:871121},
        {product:"stand mixer1", brand:"kitchAid1", price: 2091, id:647341},
        {product:"toaster1", brand:"smeg1", price:401, id: 9828171},
        {product:"knives1", brand:"ikea1", price:3001, id:8781231}
    ]

    return (
            <RegristryContext.Provider value={{moreGifts, user, setUser, joke}}>
                {props.children}
            </RegristryContext.Provider>
    );
}


