import Nav from "./Nav"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../DataContext"
import Logout from "./Logout"

export default function Header() {

    const {user} = useContext(DataContext)

    return (
        <div className="header-wrapper">
    
            <Link to="/" >Home</Link>
            <span> | </span>
            {user !== null ? 
                <span>
                    <h3>Welcome {user.username}!</h3>
                    <Link to="profile"> Profile </Link>
                    <Link to="create"> Create </Link>
                    <Logout />
                </span> : 
                    <Link to="login"> Login </Link>
            }
        </div>
    )
}
