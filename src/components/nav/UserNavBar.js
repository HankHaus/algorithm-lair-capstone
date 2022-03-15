import React from "react";
import { Link } from "react-router-dom";
import "./UserNavBar.css"

export const UserNavBar = () => {
    return (
        <ul className="navbar">
            <ul className="navbar__item active">
                <Link className="navbar__link" to="/homepage">Home</Link>
            </ul>

            <ul className="navbar__item">
                <Link className="navbar__link" to="/users">Users</Link>
            </ul>


            <ul className="navbar__item active">
                <Link className="navbar__link" to="/algorithmForm">Create New Algorithm</Link>
            </ul>

            <ul className="navbar__item">
                <Link className="navbar__link" to="/allAlgorithms">View All Algorithms</Link>
            </ul>
        </ul>


    )
}