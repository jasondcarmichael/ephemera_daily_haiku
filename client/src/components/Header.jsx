import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../DataContext"
import { Button } from "flowbite-react"
import { BsPlusCircle } from 'react-icons/bs'
import Logout from "./Logout"

export default function Header() {

    const {user} = useContext(DataContext)


    return (
    <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex sm:flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center">
                    <img src="https://cdnb.artstation.com/p/assets/images/images/012/729/133/large/julian-hammond-gibson-blankhaikulogo4.jpg?1536218888" className="mr-3 h-6 sm:h-9" alt="Ephemera Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ephemera</span>
                </a>
               
                {user !== null ?     
                <div className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                    <ul className="flex flex-row mt-4 space-x-6 font-normal lg:flex-row lg:space-x-8 lg:mt-0">
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
                    <div className="flex items-center lg:order-2">
                        <div className="flex md:order-2">
                            <Button>
                                <Link to="login"> Sign In </Link>
                            </Button>
                        </div>
                    </div>
                }
                
            </div>
            <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        </nav>
        
    </header>
    )
}


