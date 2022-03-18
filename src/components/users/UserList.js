import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllUsers } from "../ApiManager"
import { UsersPageNavBar } from "../nav/UsersPageNavBar"

export const UserList = () => {
    const [users, updateUser] = useState([])


    useEffect(
        () => {
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
                        return <div>
                            <p key={`user--${user.id}`} className="navbar__linkUSER">{user.name}
                        <br></br><Link to={`/users/${user.id}`}>Algorithms</Link>
                        <br></br>Solve Times
                        </p>
                        <hr></hr>
                            </div>
                        
                    }
                )
            }
        </>
    )
}