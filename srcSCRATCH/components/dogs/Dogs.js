import Shelter from "../shelter/Shelter"

const Dogs = (props)=>{
    console.log("----------")
    console.log(props)
    console.log("----------")
    return(
      <div>
        This dog component has a caretaker of {props.caretaker} a name of {props.name} an age of {props.age} and is a {props.breed}
        <Shelter />
      </div>
    )
  }

  export default Dogs;