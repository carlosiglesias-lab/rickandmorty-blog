import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container text-center">
			<div className="jumbotron my-4">
				<h1 className="display-4">{store.characters[params.theid].name}</h1>
			</div>
			<div className="row">
				<div className="col">
					<img src={store.characters[params.theid].image} alt={store.characters[params.theid].name} />
				</div>
				<div className="col-6">
					<h4>Details</h4>
					<ul className="list-group">
						<li className="list-group-item">Status : {store.characters[params.theid].status}</li>
						<li className="list-group-item">Species : {store.characters[params.theid].species}</li>
						<li className="list-group-item">Type : {store.characters[params.theid].type}</li>
						<li className="list-group-item">Gender : {store.characters[params.theid].gender}</li>
						<li className="list-group-item">Origin : {store.characters[params.theid].origin.name}</li>
						<li className="list-group-item">Location : {store.characters[params.theid].location.name}</li>
					</ul>
				</div>
				<div className="col">
					<h4>Episodes</h4>
					<p>
						{store.characters[params.theid].episode.map((item, index) => {
							return (<span className="border" key={index}>{item.match(/\d+/g)} </span>)
						})
						}
						</p>
				</div>
			</div>
			<div className="col my-5">
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
