import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AlgorithmForm } from "../AlgorithmForm/AlgorithmForm";
import { UserNavBar } from "../nav/UserNavBar";
import { UserList } from "./UserList";
import { useHistory } from "react-router-dom";

export const User = () => {
    const [userArray, updateUser] = useState([])
    const { userId } = useParams()
    const history = useHistory()

    // `http://localhost:8088/algorithms?_expand=user&userId=${userId}`
    //am i able to move this fecth call to a seperate module since it has the employeeId in it?
    useEffect(
        () => {
            return fetch(`http://localhost:8088/algorithms?_expand=user&&_expand=method&_expand=case&userId=${userId}`)
                .then(response => response.json())
                .then((data) => {
                    updateUser(data)
                })
        },
        []
    )

    const deleteAlg = (id) => {
        fetch(`http://localhost:8088/algorithms/${id}`, {
            method: "DELETE"
        })






            .then(() => {
                history.push("/users")
            })
            .then(() => {
                history.push(`/users/${userId}`)
            })
    }





    return (
        <>





            <UserNavBar />







            {
                (parseInt(userId) === parseInt(localStorage.getItem("cube_user"))) ?


                    userArray.map(
                        (user) => {
                            return <div className="userListItem" key={user.id}>
                                <div key={`algorithm--${user.id}`}>
                                    <h3 className="spacingForListsContent">{user.method.name}</h3>
                                    <h3 className="spacingForListsContent">{user.case.name}</h3>
                                    <h3 className="spacingForListsContent">{user.notation}</h3>
                                    <h3 className="spacingForListsContent">{user.perm}</h3>
                                    <h3 className="spacingForListsContent">{user.description}</h3>
                                    <button className="spacingForListsContentDELETE" onClick={() => {
                                        deleteAlg(user.id)
                                    }}>Delete</button>
                                    <hr></hr>
                                    <br></br>
                                </div>
                            </div>

                        }
                    )


                    :


                    userArray.map(
                        (user) => {
                            return<div className="userListItem" key={user.id}>
                                <h3 className="spacingForListsContent">{user.method.name}</h3>
                                <h3 className="spacingForListsContent">{user.case.name}</h3>
                                <h3 className="spacingForListsContent">{user.notation}</h3>
                                <h3 className="spacingForListsContent">{user.perm}</h3>
                                <h3 className="spacingForListsContent">{user.description}</h3>
                                <hr></hr>
                                <br></br>
                            </div>

                        }
                    )


            }

        </>
    )
}