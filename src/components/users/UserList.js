import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllUsers } from "../ApiManager"
import { UsersPageNavBar } from "../nav/UsersPageNavBar"


export const UserList = () => {
    const [users, updateUser] = useState([])


    useEffect(
        () => {
            // let isMounted = true
            getAllUsers()
                .then(
                    (users) => {
                        updateUser(users)
                    }
                )
        },
        []
    )







    return (
        <>
            <UsersPageNavBar />


            {
                users.map(
                    (user) => {
                        return <div key={`user--${user.id}`}>
                            <div className="userListContainment">

                                <p key={`user--${user.id}`} className="navbar__linkUSER"><i>{user.name}</i>
                                </p>

                                <div className="algAndSolveLinks">
                                    <div>
                                        <Link to={`/users/${user.id}`}  className="algLink">Algorithms</Link>
                                    </div>
                                    <div>
                                        <Link to={`/users/solveTimes/${user.id}`}  className="solveTimeLink">Solve Times</Link>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <hr></hr>
                        </div>

                    }
                )
            }
        </>
    )
}