import { useState } from "react";

function Counter(){

const initialx=1
const [x,setx] = useState(initialx)


// add function
const add=(a)=>{
setx(x+1);
}

// subtract function
const subtract=(a)=>{
  setx(x-1);
  }
  const reset=()=>{
    setx(initialx);
    }


  return (
  <div>
    <button onClick={add}>+</button>
    <button onClick={subtract}>-</button>
    <button onClick={reset}>Reset</button>
    <h1>counter: {x}</h1>
  </div>
    )
}

export default Counter;