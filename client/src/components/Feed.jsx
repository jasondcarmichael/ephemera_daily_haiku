import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { Card } from 'flowbite-react'
import axios from 'axios'

export default function Feed() {

    const [haikus, setHaikus] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:8000/haikus/')
        .then(res => {
            if (res) {
                setHaikus(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    if (!haikus) {
        return <h3> Loading please wait.</h3>
    } else {
    
    return (

        <div className="feed-container">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Recent Posts</h2>
            </div> 
            <div className="max-w-sm">
                <Card
                    imgAlt="Basho painting of waterfall"
                    imgSrc="https://upload.wikimedia.org/wikipedia/commons/7/74/Basho_Horohoroto.jpg"
                >
                        <div className="flex justify-between items-center mb-3 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                Daily Inspiration
                            </span>
                            <span className="text-primary-800 text-xs font-medium ">{format(new Date(), "EEEE, MM/dd/yyyy") }</span>
                        </div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Today's Classical Haiku
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        trying to walk straight<br></br>
                        down a path of logicality<br></br>
                        while tipsy<br></br>
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">- <em>Meitei 1894-1965</em></p>
                </Card>
            </div>

            <div className="feed-wrapper">
                <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {haikus.map((haiku) => (
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={haiku.id}>
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                    Haiku
                                </span>
                                <span className="text-sm">{haiku.created_on}</span>
                            </div>
                            <h2 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{haiku.title}</a></h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400" id="haiku-body">{haiku.body}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                    <span className="font-medium dark:text-white">
                                    By poet # {haiku.user_id}
                                    </span>
                                </div>
                            </div>
                        </article> 
                        ))}
                    </div>  
                </div>
                </section>
            </div>
    </div>
    )
}}