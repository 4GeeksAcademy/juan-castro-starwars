import { Link } from "react-router-dom";
import starwarslogo from "../assets/img/icons8-la-guerra-de-las-galaxias-50.png"
import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light mb-5">
			<div className="container">
				<Link to="/">

					<img src={starwarslogo} alt="Star Wars Logo" width="50" height="50" />
				</Link>
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.fav_list.length === 0 ? (
							<li>
								<button className="dropdown-item text-muted" type="button" disabled>No tienes favoritos</button>
							</li>
						) : (
							store.fav_list.map((ele) => {
								return (
									<li key={ele.uid}>
										<div className="dropdown-item d-flex justify-content-between align-items-center">
											<span>{ele.name}</span>
											<i className="fa-solid fa-delete-left" style={{cursor: 'pointer'}} onClick={() => dispatch({ type: 'del_fav', payload: ele.uid })}></i>
										</div>
									</li>
								)
							})
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};