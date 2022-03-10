import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const AlgorithmFormNavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/homepage">Home</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/users">Users</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link" to="/allAlgorithms">View All Algorithms</Link>
            </li>
        </ul>
    )
}