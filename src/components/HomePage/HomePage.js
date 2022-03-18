import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { HomePageNavBar } from "../nav/NavBar"







import "./HomePage.css"














export const HomePage = () => {
    
    return (
        <>







      

            <HomePageNavBar />
<div className="maincontainer">

            <h2 className="app-title">Algorithm Lair</h2>

            <p className="app-description">Algorithm Lair is the app that lets you keep track of all your handy cube algorithms!</p>

            <div className="createnew">

                <Link className="navbar__link__seperated" to="/algorithmForm">Create New Algorithm</Link>
            </div>
</div>


        </>
    )
}