import Nav from "./Nav"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../DataContext"
import { Navbar, Dropdown, Avatar } from "flowbite-react"
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
                    <Link to="feed"> Feed </Link>
                    <Link to="create"> Create </Link>
                    <Logout />
                </span> : 
                    <Link to="login"> Login </Link>
            }
        </div>
    )
}

<div className="header-wrapper">
    <Navbar
    fluid={true}
    rounded={true}
    >
    <Navbar.Brand >
        <img
        src="https://cdnb.artstation.com/p/assets/images/images/012/729/133/large/julian-hammond-gibson-blankhaikulogo4.jpg?1536218888"
        className="mr-3 h-6 sm:h-9"
        alt="Ephemera Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Ephemera
        </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
        <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
        >
        <Dropdown.Header>
            <span className="block text-sm">
                {user.username}
            {/* Bonnie Green */}
            </span>
            <span className="block truncate text-sm font-medium">
            name@flowbite.com
            </span>
        </Dropdown.Header>
        <Dropdown.Item>
            <Link to="profile"> Profile </Link>
            {/* Profile */}
        </Dropdown.Item>
        <Dropdown.Item>
            My Haiku
        </Dropdown.Item>
        <Dropdown.Item>
            Settings
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
            <Logout />
            Sign out
        </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
        <Navbar.Link
        href="/"
        active={true}
        >
        Home
        </Navbar.Link>
        <Navbar.Link href="/create" active={true}>
        Create
        </Navbar.Link>
        <Navbar.Link href="/feed" active={true}>
        Feed
        </Navbar.Link>
        {/* <Navbar.Link href="/navbars">
        Pricing
        </Navbar.Link>
        <Navbar.Link href="/navbars">
        Contact
        </Navbar.Link> */}
    </Navbar.Collapse>
    </Navbar>
</div>
