import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Card = props => {
    const { store, actions } = useContext(Context);
    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <img src={props.character.image} className="card-img-top" alt={props.character.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.character.name}</h5>
                    <p className="card-text">Is a {props.character.gender} {props.character.species} that appears in {props.character.episode.length > 1 ? props.character.episode.length + " episodes" : props.character.episode.length + " episode"}</p>
                    <div className="d-flex">
                        <div >
                            <Link to={`/single/${props.character.id - 1}`}>
                                <button className="btn btn-primary">Full info</button>
                            </Link>
                        </div>
                        <div className="ms-auto">
                            <i className={store.favorites.find((e, i) => e == props.character.id) ? "fas fa-heart" : "far fa-heart"} onClick={(e) => {
                                store.favorites.find((e, i) => e == props.character.id) ?
                                    null : actions.addFavorite(props.character.id)
                            }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}