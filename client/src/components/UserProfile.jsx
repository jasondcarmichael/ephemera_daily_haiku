import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { DataContext } from "../DataContext";
import Client from "../services/api";

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
                    <img class="object-cover w-36 h-36 mb-2 rounded" src={profiles.image_url} alt="Large avatar"/>
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
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

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
                                        <button type="button" className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                            <svg aria-hidden="true" className="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                            Delete
                                        </button> 
                                    </div>
                                    <hr class="mt-8 mb-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
                            </div>
                        ))}
                    </div>
            </div>
            </section>
            </Card>
        </div>
    )
}
