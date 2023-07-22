import React, {useState} from "react";

function LightSwitchButton(props) {
  console.log("props", props)
  const {light, setLight, switchLight} = props;
  
  return (
    <div>
    <button className="LightSwitchButton" onClick={switchLight}>
    {light === "on" && <span><i>💡</i> I'm on!</span>}
    {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
  </button>
  </div>
  )
}

export default LightSwitchButton;