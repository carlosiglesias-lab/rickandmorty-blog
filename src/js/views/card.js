import React from "react";
import { Link } from "react-router-dom";

export const Card = props => {
    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <img src={props.character.image} className="card-img-top" alt={props.character.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.character.name}</h5>
                    <p className="card-text">Is a {props.character.gender} {props.character.species} that appears in {props.character.episode.length > 1 ? props.character.episode.length + " episodes" : props.character.episode.length + " episode"}</p>
                    <Link to={`/single/${props.character.id-1}`}>
                        <button className="btn btn-primary">Full info</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}