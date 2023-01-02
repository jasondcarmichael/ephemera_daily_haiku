import SignIn from "./SignIn"
import { useState, useEffect, useContext } from "react"
import DataContext from "../DataContext"
import axios from "axios"

export default function Home() {
    


    return (
        <div className="home-wrapper">
            <div>
                <h2>Today is Sunday, January 1, 2023</h2>
            </div>
            <br></br>
            <div>
                <p> trying to walk straight<br></br>
                    down a path of logicality<br></br>
                    while tipsy<br></br>
                </p>
                <br></br>
                <p>- Meitei 1894-1965</p>
            </div>
        </div>
    )
}