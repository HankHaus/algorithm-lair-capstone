import React from "react";
import { Redirect, Route } from "react-router-dom"
import { HomePage } from "./HomePage/HomePage";
import { UserList } from "./users/UserList";
import { AlgorithmForm } from "./AlgorithmForm/AlgorithmForm";
import { User } from "./users/User";
import { AllAlgorithms } from "./AllAlgorithms/AllAlgorithms";
import { StopWatch } from "./TimeTracker/StopWatch/StopWatch";
import { UserSolveTimes } from "./users/UserSolveTimes";


export const ApplicationViews = () => {
    return (
        <>
<Route exact path="/">
        <Redirect to="/homepage" />
            </Route>

            <Route path="/homepage">
        <HomePage />
            </Route>

            <Route exact path="/users">
        <UserList />
            </Route>

            <Route exact path="/allAlgorithms">
        <AllAlgorithms />
            </Route>

            <Route path="/algorithmForm">
        <AlgorithmForm />
            </Route>

            <Route exact path="/users/:userId(\d+)">
        <User />
            </Route>

            <Route path="/users/solveTimes/:userId(\d+)">
        <UserSolveTimes />
            </Route>

            <Route path="/stopwatch">
        <StopWatch />
            </Route>
        </>

    )
}