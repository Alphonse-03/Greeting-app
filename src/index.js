//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
var time = today.getHours();
//Show a single h1 that says "Good morning" if between midnight and 12PM.
if (time < 12) {
  ReactDOM.render(
    <div>
      <h1 className="heading" style={{ color: "red" }}>
        Good Morning
      </h1>
    </div>,
    document.getElementById("root")
  );
}
//or "Good Afternoon" if between 12PM and 6PM.
else if (time >= 12 && time <= 16) {
  console.log("noon");
  ReactDOM.render(
    <div>
      <h1 className="heading" style={{ color: "green" }}>
        Good Afternoon
      </h1>
    </div>,
    document.getElementById("root")
  );
}

//or "Good evening" if between 6PM and midnight.
else {
  ReactDOM.render(
    <div>
      <h1 className="heading" style={{ color: "blue" }}>
        Good Night
      </h1>
    </div>,
    document.getElementById("root")
  );
}

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
