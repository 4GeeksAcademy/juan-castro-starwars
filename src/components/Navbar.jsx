import { Link } from "react-router-dom";
import starwarslogo from "../assets/img/icons8-la-guerra-de-las-galaxias-50.png"
import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-5">
			<div className="container">
				<Link to="/">

					<img src={starwarslogo} alt="Star Wars Logo" width="40" height="40" />
				</Link>
				<div class="btn-group">
					<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
						<ul class="dropdown-menu dropdown-menu-end">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
						
						<li><a class="dropdown-item" href="#">Separated link</a></li>
					</ul>
					</button>
				</div>
			</div>
		</nav>
	);
};