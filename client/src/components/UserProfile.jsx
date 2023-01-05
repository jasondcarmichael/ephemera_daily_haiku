import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { DataContext } from "../DataContext";
import Client from "../services/api";
import DeletePost from "./DeletePost";

export default function UserProfile() {

    const {user, profiles, setProfiles} = useContext(DataContext)
    
    const getProfile = async () => {
        try{ 
        const response = await Client.get(`users/${user.username}`)
        console.log(response.data)
        setProfiles(response.data)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div className="profiles">
            <Card>
                <div className="mx-auto max-w-screen-sm text-center mb-2">
                    <h2 className="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Your Profile</h2>
                </div> 
                
            <section className="bg-white dark:bg-gray-900">
            <div className="pb-8 px-4 mx-auto max-w-2xl lg:py-8">
                <div className="flex flex-wrap gap-2">
                    <img className="object-cover w-36 h-36 mb-2 rounded" src={profiles.image_url} alt="Large avatar"/>
                </div>
                
                <h2 className="mb-2 text-2xl font-bold leading-none text-gray-900 md:text-3xl dark:text-white">{profiles.username}</h2>
                <p className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{profiles.first_name} {profiles.last_name}</p>
                <dl>
                    <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Email</dt>
                    <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{profiles.email}</dd>
                </dl>
                <dl>
                    <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Tagline</dt>
                    <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{profiles.tagline}</dd>
                    </dl>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                    <div className="my-poems-container">
                        <p className="mb-4 mt-6 text-xl font-bold leading-none text-gray-900 md:text-2xl dark:text-white">Haiku History</p>
                        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        {profiles.haikus.map((haiku) => (
                                <div className="mb-4 pb-2.5" id="my-poems-card" key={haiku.id}>
                                    <dl>
                                        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">{haiku.title}</dt>
                                        <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Posted on {haiku.created_on}</dd>
                                        <dd className="mb-4 font-light text-gray-500 whitespace-pre-wrap sm:mb-5 dark:text-gray-400">{haiku.body}</dd>
                                    </dl>
                                    <div className="flex items-center space-x-4">
                                    <Link to="edit_post" state={{myHaiku:haiku}}>
                                        <button type="button" className="text-white inline-flex items-center bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            <svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
                                            EDIT 
                                        </button>
                                        </Link>
                                        <DeletePost haiku={haiku}/>
                                    </div>
                                    <hr className="mt-8 mb-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
                            </div>
                        ))}
                    </div>
            </div>
            </section>
            </Card>
        </div>
    )
}
