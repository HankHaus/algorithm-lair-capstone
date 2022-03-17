import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const HomePageNavBar = () => {
    return (
        <>
                <div className="homepageDiv">
        <ul className="navbar">
            {/* <ul className="navbar__item active">
                <Link className="navbar__link" to="/algorithmForm">Create New Algorithm</Link>
            </ul> */}
            <ul className="navbar__item">
                <Link className="navbar__link" to="/users">Users</Link>
            
            </ul>

            <ul className="navbar__item">
                <Link className="navbar__link" to="/allAlgorithms">View All Algorithms</Link>
            </ul>

            <ul className="navbar__item">
                <Link className="navbar__link" to="/stopwatch">StopWatch</Link>
            </ul>

            <ul className="navbar__item">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("cube_user")
                    }
                }
                >Logout</Link>
            </ul>
        </ul>
            </div>
        </>
    )
}