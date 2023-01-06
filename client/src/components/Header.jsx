import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../DataContext"
import { Button } from "flowbite-react"
import { BsPencilSquare, BsPersonCircle, BsHouseFill } from 'react-icons/bs'
import Logout from "./Logout"

export default function Header() {

    const {user} = useContext(DataContext)


    return (
    <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex justify-between items-center mt-2 mx-auto order-first sm:flex">
            

                <a href="/" className="flex items-center">
                    <img src="https://cdnb.artstation.com/p/assets/images/images/012/729/133/large/julian-hammond-gibson-blankhaikulogo4.jpg?1536218888" className="mr-3 h-6 sm:h-9" alt="Ephemera Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ephemera</span>
                </a>
               
                {user !== null ?     
                    <div className="items-center">
                    <ul className="flex flex-row object-left  order-last mt-2 space-x-3 font-normal sm:space-x-8">
                        <li>
                        <Link to="feed"> <BsHouseFill className="icon" size='25' /> </Link>
                        </li>
                        <li>
                        <Link to="create"><BsPencilSquare className="icon" size='24' /> </Link>  
                        </li>
                        <li>
                        <Link to="profile"> <BsPersonCircle className="icon" size='24'/></Link>
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
        </nav>
        
    </header>
    )
}


