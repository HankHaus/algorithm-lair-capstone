import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const AllAlgorithmsNavBar = () => {
    return (
        <ul className="navbar">
            <ul className="navbar__item active">
                <Link className="navbar__link" to="/homepage">Home</Link>
            </ul>

            <ul className="navbar__item active">
                <Link className="navbar__link" to="/users">Users</Link>
            </ul>

            <ul className="navbar__item active">
                <Link className="navbar__link" to="/algorithmForm">Create New Algorithm</Link>
            </ul>
        </ul>
    )
}