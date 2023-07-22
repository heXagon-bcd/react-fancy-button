import React, {useState} from "react";
function AngryButton () {
const [anger, setAnger] = useState(0);

return (
  <div>
  <button className="AngryButton" style={{ backgroundColor: `rgba(255,0,0,${anger})` }} onClick={() => setAnger(anger + 0.2)}>
  { anger < 1 && <span>Don't click me too much! </span>}
  { anger >= 1 && <span>Rawr!</span>}
</button>
  </div>
)
}

export default AngryButton  