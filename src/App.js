import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import User from "./Pages/User";
import Personal from "./components/User/Personal";
import Dates from "./components/User/Dates";
import AboutMe from "./components/User/AboutMe";
import Notifications from "./components/User/Notifications";
import Works from "./Pages/Works";
import ErrorP from "./Pages/ErrorP";

function App() {
	
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/landing" element={<Landing />} />
					<Route path="/user" element={<User />}>
						<Route path="personal" element={<Personal />} />
						<Route path="dates" element={<Dates />} />
						<Route path="about" element={<AboutMe />} />
						<Route path="notification" element={<Notifications />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/works" element={<Works />} />
					<Route path="*" element={<ErrorP />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
