import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Feed from './Feed'
import SignIn from "./SignIn"


export default function Main() {
    return (
        <div className="main-wrapper">
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/feed" element = {<Feed />} />

            </Routes>
        </div>
    )
}