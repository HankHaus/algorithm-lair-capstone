import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { UserNavBar } from "../nav/UserNavBar";
import { useHistory } from "react-router-dom";

export const UserSolveTimes = () => {
    const [UserSolveTimesArray, updateUserSolveTimesArray] = useState([])
    const { userId } = useParams()
    const history = useHistory()
    const [userObject, updateUserObject] = useState({})

    useEffect(
        () => {
            return fetch(`http://localhost:8088/solveTimes?_expand=user&&_expand=cubeSize&userId=${userId}`)
                .then(response => response.json())
                .then((data) => {
                    updateUserSolveTimesArray(data)
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

    const deleteTime = (id) => {
        fetch(`http://localhost:8088/solveTimes/${id}`, {
            method: "DELETE"
        })

            .then(() => {
                history.push("/solveTimes")
            })
            .then(() => {
                history.push(`users/solveTimes/${userId}`)
            })
    }











    // // initialize new Date object
    // const date_ob = new Date(inventoryObject.timestamp);

    // // year as 4 digits (YYYY)
    // const year = date_ob.getFullYear();

    // // month as 2 digits (MM)
    // const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // // date as 2 digits (DD)
    // const date = ("0" + date_ob.getDate()).slice(-2);

    // // hours as 2 digits (hh)
    // const hours = ("0" + date_ob.getHours()).slice(-2);

    // // minutes as 2 digits (mm)
    // const minutes = ("0" + date_ob.getMinutes()).slice(-2);

    // // seconds as 2 digits (ss)
    // const seconds = ("0" + date_ob.getSeconds()).slice(-2);












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


                    UserSolveTimesArray.map(
                        (solveTime) => {
                            // initialize new Date object
                            const date_ob = new Date(solveTime.timestamp);

                            // year as 4 digits (YYYY)
                            const year = date_ob.getFullYear();

                            // month as 2 digits (MM)
                            const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

                            // date as 2 digits (DD)
                            const date = ("0" + date_ob.getDate()).slice(-2);

                            // hours as 2 digits (hh)
                            const hours = ("0" + date_ob.getHours()).slice(-2);

                            // minutes as 2 digits (mm)
                            const minutes = ("0" + date_ob.getMinutes()).slice(-2);

                            // seconds as 2 digits (ss)
                            const seconds = ("0" + date_ob.getSeconds()).slice(-2);


                            return <div className="usersalglistcontainment">
                                <div className="usersalglist" key={solveTime.id}>
                                    <div key={`algorithm--${solveTime.id}`}>
                                        <h3 className="spacingForListsContent">{new Date(solveTime.solveTime).toISOString().slice(11, 19)
                                        }</h3>
                                        <h3 className="spacingForListsContent">{solveTime.cubeSize.size}</h3>
                                        {/* <h3 className="spacingForListsContent">{new Date(solveTime.timestamp).toString()}</h3> */}

                                        <h3 className="spacingForListsContent">{month}/{date}/{year}</h3>

                                        <button className="spacingForListsContentDELETE" onClick={() => {
                                            deleteTime(solveTime.id)
                                        }}>Delete</button>
                                        <br></br>
                                    </div>
                                </div>
                            </div>

                        }
                    )


                    :


                    UserSolveTimesArray.map(
                        (solveTime) => {
                            // initialize new Date object
                            const date_ob = new Date(solveTime.timestamp);

                            // year as 4 digits (YYYY)
                            const year = date_ob.getFullYear();

                            // month as 2 digits (MM)
                            const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

                            // date as 2 digits (DD)
                            const date = ("0" + date_ob.getDate()).slice(-2);

                            // hours as 2 digits (hh)
                            const hours = ("0" + date_ob.getHours()).slice(-2);

                            // minutes as 2 digits (mm)
                            const minutes = ("0" + date_ob.getMinutes()).slice(-2);

                            // seconds as 2 digits (ss)
                            const seconds = ("0" + date_ob.getSeconds()).slice(-2);


                            return <div className="usersalglistcontainment">
                                <div className="usersalglist" key={solveTime.id}>
                                    <div key={`algorithm--${solveTime.id}`}>
                                        <h3 className="spacingForListsContent">{new Date(solveTime.solveTime).toISOString().slice(11, 19)
                                        }</h3>
                                        <h3 className="spacingForListsContent">{solveTime.cubeSize.size}</h3>
                                        {/* <h3 className="spacingForListsContent">{new Date(solveTime.timestamp).toString()}</h3> */}

                                        <h3 className="spacingForListsContent">{month}/{date}/{year}</h3>


                                      
                                        <br></br>
                                    </div>
                                </div>
                            </div>

                        }
                    )


            }

        </>
    )
}