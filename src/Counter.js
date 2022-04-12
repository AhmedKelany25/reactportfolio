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
    </div>
  );
};

export default Counter;
