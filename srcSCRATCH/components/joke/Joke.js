import Count from "../count/Count"

const Joke = (props)=>{
    console.log("*******")
    console.log(props)
    console.log("*******")
    return(
      <div>
       <Count count={props.count} />
        <br></br>
        {props.bulldog} 
      </div>
    )
  }

  export default Joke;