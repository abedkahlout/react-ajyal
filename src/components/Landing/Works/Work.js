import React from "react";
import Title from "../Title/Title";
import BoxNews from "./BoxNews";
import HeroNews from "./HeroNews";
import "./work.css";

function Work() {
	return (
		<div className="container">
			<Title name="أعمالنا" />
			<div className="container-wrorks"  id="work">
				<HeroNews />
				<div>
        <BoxNews />
        <BoxNews />
        <BoxNews />
				</div>
			</div>
		</div>
	);
}

export default Work;
