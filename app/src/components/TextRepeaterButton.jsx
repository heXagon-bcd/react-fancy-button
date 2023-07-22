import React, {useState} from "react";

function TextRepeaterButton() {
  const [repetitions, setRepetitions] = useState(1);
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }
  return(
    <div>
    <button className="TextRepeaterButton" onClick={() => setRepetitions(repetitions + 1)} >
        {textArray}
    </button>
    </div>
  )
}

export default TextRepeaterButton