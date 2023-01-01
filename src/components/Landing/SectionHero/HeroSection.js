import React from "react";
import "./hero.css";
import axios from "axios";
function HeroSection() {
	const baseURL = "https://jsonplaceholder.typicode.com/todos/1";

	const [data, setdata] = React.useState([
		{
			title: "أجيال بعطاء واسع بلا حدود",
			descriptions:
				" هو مشروع بدأ تنفيذه في جمعية أجيال للإبداع والتطوير بالشراكة مع الشريك السويدي للتنمية IM سنة 2019 حيث يستهدف فئة الشباب من كال الجنسين من	سن29-18سنة.",
		},
	]);
	// React.useEffect(() => {
	// 	axios.get(baseURL).then((res) => {
	// 		setdata({
	// 			title: res?.data?.title,
	// 			descriptions: res?.data?.descriptions,
	// 		});
	// 	});
	// }, []);

	return (
		<div className="hero" id="hero">
			<div className="container">
				<p className="hed-we-are">{data[0]?.title},</p>
				<p className="we-are">{data[0]?.descriptions},</p>
			</div>
		</div>
	);
}

export default HeroSection;
