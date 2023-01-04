import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorites } from "./favorites";
import { Autocomplete } from "./autocomplete"

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
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length == 0 ? <li className="dropdown-item">empty</li> : null}
						{store.favorites.map((element, index) => {
							const character = store.characters[element-1];
							/*if (!character)
								return ( console.log("no existe")
								//<li className="dropdown-item" key={index}>empty</li>
								)
							else{*/
							return (
								/*<Favorites key={index} favorite={element}/>*/
								<li className="dropdown-item d-flex" key={index}>
									<Link to={`/single/${character.id-1}`} className="dropdown-item">{character.name}</Link>
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
