import { Navbar, Button } from "flowbite-react"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
        <Navbar
            fluid={true}
            rounded={true}
            >
            <div className="flex md:order-2">
                <Button>
                <Link to="login"> Sign In </Link>
                </Button>
                <Navbar.Toggle />
            </div>
           
        </Navbar>
        </div>
    )
}

/* //     return (
//         <div className="header-wrapper">
    
//             <Link to="/" >Home</Link>
//             <span> | </span>
//             {user !== null ? 
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
} */
{/* <div className="flex md:order-2">
<div className="user-loggedin">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<Avatar alt="User settings"
                                // icon={BsPerson} 
                                // img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
                                rounded={true} />}
                        > 
                            <Dropdown.Header>
                                <span className="block text-lg font-medium">
                                    {user.username}
                                </span>
                                <span className="block truncate text-sm font-normal">
                                    name@email.com
                                </span>
                            </Dropdown.Header> 
                            <Dropdown.Item>
                                <Link to="profile"> Profile </Link>
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
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
            </div></div> */}