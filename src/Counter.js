import { useState } from "react";

import Card from "react-bootstrap/Card";
import CounterActions from "./CounterActions";

const Counter = (props) => {
  const [counter, setCounter] = useState(10);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter != 0) setCounter(counter - 1);
  };
  
  const [val, setVal] = useState("");
  const [items, setItems] = useState(["ahmed","kamel","nader"]);

  const onclickHandler = ()=>{
    setItems((prev)=>{
        return [val,...prev]
    })
    setVal("")
    console.log("ahmed")
  }
const onItemHandler = (e)=>{
  if(e.target.hasAttribute("style")){
      e.target.removeAttribute("style")
  }else{
    e.target.style.textDecoration= "line-through"

  }
  console.log(e.target)
}

  return (
    <div className="App text-center">
      <Card style={{ width: "18rem", margin: "5% auto" }}>
        <Card.Body>
          <Card.Title>Counter</Card.Title>
          <Card.Text>
            <h2>{counter}</h2>
          </Card.Text>
          <CounterActions
            onIncrease={increaseCounter}
            ondecrease={decreaseCounter}
          />
        </Card.Body>
      </Card>

      <div> 
          <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}></input>
          <button onClick={onclickHandler}>Add</button>
          <ul>
          
            {items && items.length>0&& items.map((item)=>{
              return <li onClick={(e)=>onItemHandler(e)}>{item}</li>
            })}
            
          </ul>
      </div>




    </div>
  );
};

export default Counter;
