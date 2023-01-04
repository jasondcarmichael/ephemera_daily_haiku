import Nav from "./Nav"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../DataContext"
import { Button } from "flowbite-react"
import Logout from "./Logout"

export default function Header() {

    const {user} = useContext(DataContext)


    return (
    <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" class="flex items-center">
                    <img src="https://cdnb.artstation.com/p/assets/images/images/012/729/133/large/julian-hammond-gibson-blankhaikulogo4.jpg?1536218888" class="mr-3 h-6 sm:h-9" alt="Ephemera Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ephemera</span>
                </a>
                {user !== null ?
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                        <Link to="feed"> Feed </Link>
                        </li>
                        <li>
                        <Link to="create"> Create </Link>  
                        </li>
                        <li>
                        <Link to="profile"> Profile </Link>
                        </li>
                        <li>
                        <Logout />
                        </li>
                
                    </ul> 
                    </div>:
                    <div class="flex items-center lg:order-2">
                        <div className="flex md:order-2">
                            <Button>
                                <Link to="login"> Sign In </Link>
                            </Button>
                            </div>
                    </div>
                }
                
            </div>
        </nav>
    </header>
    )
}


