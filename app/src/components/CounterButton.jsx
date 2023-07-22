import React, {useState} from "react";

function CounterButton() {
  const [clickAmount, setClickAmount] = useState(0);
  return (
    <div>
      <button className="CounterButton" onClick={() => setClickAmount(clickAmount +1)}>
      You clicked me {clickAmount} amount of times
      </button>
    </div>
  )
}

export default CounterButton