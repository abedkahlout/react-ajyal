import React from "react";
import Heading from "../heading/Heading";
import "./ContactUs.css";
function ContactUs() {
	const [name, setName] = React.useState("");
	const [email, setemail] = React.useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`The name you entered was: ${name} , ${email}`);
	};
	return (
		<div className="contact-us-container">
			<div className="contact-us-discription" id="call">
				<Heading headTitle="راسلنا الان" />
				<p>
					هدفنا هو تمكين الشباب في المجتمع و خاصة في قطاع غزة من خالل تنمية و تطوير
					مهاراتهم في مجاالت مختلفة من ضمنها
				</p>
			</div>
			<div className="contact-us-form">
				<form onSubmit={handleSubmit}>
					<div className="nested-input-form">
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="الاسم بالكامل"
						/>
						<input
							type="email"
							placeholder="البريد الالكتروني"
							value={email}
							onChange={(e) => setemail(e.target.value)}
						/>
					</div>
					<div className="nested-input-form">
						<input type="text" placeholder="رقم الهاتف" />
						<input type="email" name="" id="" placeholder="العنوان بالكامل" />
					</div>
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="اكتب رسالتك هنا"
					></textarea>
					<div>
						<button type="submit">إرسال</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactUs;
