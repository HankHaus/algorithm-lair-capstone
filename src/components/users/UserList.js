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
                        return <p key={`user--${user.id}`} className="userListUser"><Link to={`/users/${user.id}`}>{user.name}</Link></p>
                        
                    }
                )
            }
        </>
    )
}