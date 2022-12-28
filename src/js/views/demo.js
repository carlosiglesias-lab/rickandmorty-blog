import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=>{
		actions.getCharacters();		
	},[])

	return (
		<div className="container">
			{console.log(store.characters)}
			<ul className="list-group">
				{store.characters.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<p>{item.name}</p>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
