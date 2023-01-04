import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Favorites = props => {
    
    const { store, actions } = useContext(Context);
    //console.log(store.demo[0].title);
    //console.log(store.characters[0]);	
    return (
        <li className="dropdown-item">
            <Link to="/demo" className="dropdown-item">{props.favorite}</Link>
            <span><i className="fa fa-trash" onClick={(e) => {
                actions.deleteFavorite(props.favorite);
            }}></i></span>
        </li>
    )
}