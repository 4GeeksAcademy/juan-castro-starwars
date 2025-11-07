import { Link } from "react-router-dom";
import starwarslogo from "../assets/img/icons8-la-guerra-de-las-galaxias-50.png"

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					
					<img src={starwarslogo} alt="Star Wars Logo" width="40" height="40" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};