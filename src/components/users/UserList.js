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
                            <p key={`user--${user.id}`} className="navbar__linkUSER">{user.name}
                                <br ></br>
                            </p>
                                <div className="algLink">
                                    <Link to={`/users/${user.id}`}>Algorithms</Link>
                                </div>
                                <br></br>
                            <hr className="hr"></hr>
                        </div>

                    }
                )
            }
        </>
    )
}