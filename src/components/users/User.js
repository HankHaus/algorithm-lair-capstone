import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AlgorithmForm } from "../AlgorithmForm/AlgorithmForm";
import { UserNavBar } from "../nav/UserNavBar";
import { UserList } from "./UserList";

export const User = () => {
    const [object, updateUser] = useState([])
    const { userId } = useParams()

    // `http://localhost:8088/algorithms?_expand=user&userId=${userId}`
    //am i able to move this fecth call to a seperate module since it has the employeeId in it?
    useEffect(
        () => {
            return fetch(`http://localhost:8088/algorithms?_expand=user&_expand=method&_expand=case&userId=${userId}`)
                .then(response => response.json())
                .then((data) => {
                    updateUser(data)
                })
        },
        []
    )








    return (
        <>
            <UserNavBar />
            <h2>User's Algorithms</h2>
            {
                object.map(
                    (user) => {
                        return <>
                        <h3 key={user.methodId}>{user.method.name}</h3> 
                        <h3 key={user.caseId}>{user.case.name}</h3> 
                        <h3 key={user.userId}>{user.notation}</h3> 
                        <h3 key={user.userId}>{user.description}</h3> 
                        <h3 key={user.id}>{user.user.name}</h3>
                        <hr></hr>
                        </>
                    }
                )
            }
        </>
    )
}