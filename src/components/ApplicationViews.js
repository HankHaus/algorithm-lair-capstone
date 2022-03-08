import React from "react";
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage/HomePage";
import { UserList } from "./users/UserList";
import { AlgorithmForm } from "./AlgorithmForm/AlgorithmForm";
import { User } from "./users/User";


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/homepage">
        <HomePage />
            </Route>

            <Route exact path="/users">
        <UserList />
            </Route>

            <Route path="/algorithmForm">
        <AlgorithmForm />
            </Route>

            <Route path="/users/:userId(\d+)">
        <User />
            </Route>
        </>

    )
}