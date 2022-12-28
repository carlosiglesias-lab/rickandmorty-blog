import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Rick & Morty Wiki</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((element, index) => {
							console.log(element);
							return (
								<li className="dropdown-item" key={index}>
									
									<Link to="/demo">{element}</Link>
									<span><i className="fa fa-trash" onClick={(e) => {
										actions.deleteFavorite(index);
									}}></i></span>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
