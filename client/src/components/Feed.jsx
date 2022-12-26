import { useState, useEffect } from 'react'
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
    
    return  (
        <div className="feed-container">
            <h1>Recent Haikus</h1>
            <div>
            {haikus.map((haiku) => (
                <div key={haiku.id}>
                    <h3>Written by: {haiku.user_id}</h3>
                    <p>On {haiku.created_on}</p>
                    <h5>Title: {haiku.title}</h5>
                    <p>{haiku.body}</p>
                </div>
            
    
            ))}
            </div>

        </div>


    )
}}