import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";
function HomeUser() {
	return (
		<div>
			<div className="container-user">
				<div className="backg-span"></div>
				<div className="container layout">
					<div className="user-side">
						<div className="personal">
							<img src="/assets/student.jpg" />
							<p>محمد محمد</p>
						</div>
            <div className="user-pages">
            <Link to="personal">الملف الشخصي</Link>
            <Link to="dates">الحضور</Link>
            <Link to="about">انجازاتي</Link>
            <Link to="notification">الاشعارات</Link>
            </div>
					</div>
					<div className="user-content">
            <Outlet />
          </div>
				</div>
			</div>
		</div>
	);
}

export default HomeUser;
