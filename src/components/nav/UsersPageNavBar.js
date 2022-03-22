import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UsersPageNavBar = () => {
    const [userObject, updateUserObject] = useState({})

    useEffect(
        () => {
            return fetch(`http://localhost:8088/users`)
                .then(response => response.json())
                .then((data) => {
                    updateUserObject(data.find(user => parseInt(localStorage.getItem("cube_user")) === user.id))
                })
        },
        []
    )
    return (
        <ul className="navbar">
            <ul className="navbar__item active">
                <Link className="navbar__link" to="/homepage">Home</Link>
            </ul>

            <ul className="navbar__item active">
                <Link className="navbar__link" to="/algorithmForm">Create New Algorithm</Link>
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
                    >Logout {`${userObject.name}`}</Link>
                </ul>
        </ul>
    )
}