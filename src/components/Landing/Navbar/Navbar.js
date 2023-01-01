import { useRef } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header id="#top">
			<img
				src="/assets/logo.jpeg"
				className="logo1"
				alt="logo"
				width="100px"
				height="80px"
			/>
			<nav ref={navRef} >
				<img
					src="/assets/logo.jpeg"
					className="logo2"
					alt="logo"
					width="100px"
					height="80px"
				/>
				<Link className="btn-login" id="small" to="/login">
					تسجيل الدخول{" "}
				</Link>
				<a href="#top">الرئيسية</a>
				<a href="#hero">من نحن </a>
				<a href="#message">الرسالة</a>
				<a href="#work">الأعمال</a>
				<a href="#number">الاحصائيات</a>
				<a href="#prog">التدريبية</a>
				<a href="#call">اتصل بنا</a>

				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					show
				</button>
			</nav>
			<Link className="btn-login" id="big" to="/login">
				تسجيل الدخول{" "}
			</Link>
			<button className="nav-btn" onClick={showNavbar}>
				open{" "}
			</button>
		</header>
	);
}

export default Navbar;
