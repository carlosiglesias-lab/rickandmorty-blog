import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Card } from "./card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
	}, [])

	return (
		<div className="container">
			<div className="row">
				{store.characters.map((item, index) => {
					return (						
						<Card key={item.id} character={item}/>						
					);
				})}
			</div>
		</div>
	);
};
