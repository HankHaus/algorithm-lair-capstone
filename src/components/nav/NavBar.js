import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const HomePageNavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/algorithmForm">Create New Algorithm</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/users">Users</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("cube_user")
                    }
                }
                >Logout</Link>
            </li>
        </ul>
    )
}