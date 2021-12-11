import React from "react";

import "./Card.css";
// props passed due to wrapper component
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
