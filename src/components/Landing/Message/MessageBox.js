import React from "react";
import "./Message.css";

function MessageBox(props) {
	return (
		<>
			<div className="title-message">{props.title}</div>
			<div className="the-message"> {props.description}</div>
		</>
	);
}

export default MessageBox;
