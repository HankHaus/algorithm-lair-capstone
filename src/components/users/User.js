import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AlgorithmForm } from "../AlgorithmForm/AlgorithmForm";
import { UserNavBar } from "../nav/UserNavBar";
import { UserList } from "./UserList";
import { useHistory } from "react-router-dom";

export const User = () => {
    const [object, updateUser] = useState([])
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


                    object.map(
                        (user) => {
                            return <>
                            <div className="userListItem">
                                <div key={`algorithm--${user.id}`}>
                                    <h3 class="spacingForListsContent" key={user.methodId}>{user.method.name}</h3>
                                    <h3 class="spacingForListsContent" key={user.caseId}>{user.case.name}</h3>
                                    <h3 class="spacingForListsContent" key={user.userId}>{user.notation}</h3>
                                    <h3 class="spacingForListsContent" key={user.userId}>{user.perm}</h3>
                                    <h3 class="spacingForListsContent" key={user.userId}>{user.description}</h3>
                                    <button class="spacingForListsContent" onClick={() => {
                                        deleteAlg(user.id)
                                    }}>Delete</button>
                                    <br></br>
                                </div>
                                </div>
                            </>
                        }
                    )


                    :


                    object.map(
                        (user) => {
                            return <>
                            <div className="userListItem">
                                <h3 class="spacingForListsContent" key={user.methodId}>{user.method.name}</h3>
                                <h3 class="spacingForListsContent" key={user.caseId}>{user.case.name}</h3>
                                <h3 class="spacingForListsContent" key={user.userId}>{user.notation}</h3>
                                <h3 class="spacingForListsContent" key={user.userId}>{user.perm}</h3>
                                <h3 class="spacingForListsContent" key={user.userId}>{user.description}</h3>
                             </div>
                                <br></br>
                            </>
                        }
                    )


            }

        </>
    )
}