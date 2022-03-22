import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { HomePageNavBar } from "../nav/NavBar"







import "./HomePage.css"














export const HomePage = () => {
    
    return (
        <>







      

            <HomePageNavBar />
{/* <div className="mainhomepagecontainer"> */}

            <div className="homepageMinusNav">


            <h2 className="app-title">Algorithm Lair</h2>

            <p className="app-description">The speedcubing site that lets you keep track of all your handy algorithms!</p>

            <div className="createnew">

                <Link className="navbar__link__seperated" to="/algorithmForm">Create New Algorithm</Link>
            </div>
            </div>
{/* </div> */}


        </>
    )
}