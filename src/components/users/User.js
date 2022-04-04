import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AlgorithmForm } from "../AlgorithmForm/AlgorithmForm";
import { UserNavBar } from "../nav/UserNavBar";
import { UserList } from "./UserList";
import { useHistory } from "react-router-dom";

export const User = () => {
    const [userAlgorithmArray, updateUserAlgorithmArray] = useState([])
    const { userId } = useParams()
    const history = useHistory()
    const [userObject, updateUserObject] = useState({})

    useEffect(
        () => {
            return fetch(`http://localhost:8088/algorithms?_expand=user&&_expand=method&_expand=cubeSize&_expand=case&userId=${userId}`)
                .then(response => response.json())
                .then((data) => {
                    updateUserAlgorithmArray(data)
                })
        },
        []
    )

    useEffect(
        () => {
            return fetch(`http://localhost:8088/users`)
                .then(response => response.json())
                .then((data) => {
                    updateUserObject(data.find(user => parseInt(userId) === user.id))
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
            <p className="displayNameOnList">
                {
                    userObject.name
                }
            </p>

            {
                (parseInt(userId) === parseInt(localStorage.getItem("cube_user"))) ?


                    userAlgorithmArray.map(
                        (user) => {
                            return <div className="usersalglistcontainment">

                                <div className="usersalglist">
                                    <div key={user.id}>
                                        <div key={`algorithm--${user.id}`}>
                                            <h3 className="spacingForListsContent">{user.cubeSize.size}</h3>
                                            <h3 className="spacingForListsContent">{user.method.name}</h3>
                                            <h3 className="spacingForListsContent">{user.case.name}</h3>
                                            <h3 className="spacingForListsContent">{user.notation}</h3>
                                            <h3 className="spacingForListsContent">{user.perm}</h3>
                                            <h3 className="spacingForListsContent">{user.description}</h3>
                                            <button className="spacingForListsContentDELETE" onClick={() => {
                                                deleteAlg(user.id)
                                            }}>Delete</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        }
                    )


                    :


                    userAlgorithmArray.map(
                        (user) => {
                            return <div className="usersalglistcontainment">

                                <div className="usersalglist">

                                    <div key={user.id}>
                                        <h3 className="spacingForListsContent">{user.cubeSize.size}</h3>
                                        <h3 className="spacingForListsContent">{user.method.name}</h3>
                                        <h3 className="spacingForListsContent">{user.case.name}</h3>
                                        <h3 className="spacingForListsContent">{user.notation}</h3>
                                        <h3 className="spacingForListsContent">{user.perm}</h3>
                                        <h3 className="spacingForListsContent">{user.description}</h3>

                                    </div>
                                </div>

                            </div>
                        }
                    )


            }

        </>
    )
}