import React, { useContext,useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorites } from "./favorites";
import { Autocomplete } from "./autocomplete"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [currentUser, setCurrentUser] = useState("carlos");
	const userChange = event => {
		setCurrentUser(event.target.value);
	};
	
	useEffect(() => {
		actions.getUsers();
	}, []);
	
	useEffect(() => {
		actions.getTodos(currentUser);
	}, [currentUser]);

	useEffect(() => {
		actions.updateTodos(currentUser);
	}, [store.favorites]);


	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Rick & Morty Wiki</span>
			</Link>
			<div className="ml-auto">
				<select className="form-select" value={currentUser} onChange={userChange}>
					{store.users.map((user, index) => {
						return (
							<option key={index} value={user}>{user}</option>
						)
					})}
				</select>
				<p>Current user: {currentUser}</p>
			</div>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length == 0 ? <li className="dropdown-item">empty</li> : null}
						{store.favorites.map((element, index) => {							
							return (
								<li className="dropdown-item d-flex" key={index}>
									{element}
									<span><i className="fa fa-trash ms-auto" onClick={(e) => {
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
