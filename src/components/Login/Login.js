import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function LoginComponent() {
	const [name, setName] = React.useState("");
	const [email, setemail] = React.useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`The name you entered was: ${name} , ${email}`);
	};
	return (
		<div className="container-login">
			<div className="right-side">
				<img
					src="/assets/logo.jpeg"
					className="logo"
					alt="logo"
					width="100px"
					height="80px"
				/>
			</div>
			<div className="left-side">
				<form onSubmit={handleSubmit}>
					<h3> تسجيل الدخول</h3>
					<div className="input-group">
						<p className="user-p">الاسم :</p>
						<input
							type="text"
							className="input"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<p className="user-p">كلمة المرور :</p>
						<input
							type="text"
							className="input"
							value={email}
							onChange={(e) => setemail(e.target.value)}
						/>
						<p>
							<button className="login-btn" type="submit">
								تسجيل الدخول
							</button>
						</p>
						<Link to="/user/personal"> asdasd</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoginComponent;
