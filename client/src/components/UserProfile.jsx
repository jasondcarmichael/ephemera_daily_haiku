import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../DataContext";
import Client from "../services/api";

export default function UserProfile() {
    let navigate = useNavigate()
    const {user, setUser, profiles, setProfiles} = useContext(DataContext)

    // const [profiles, setProfiles] = useState({
    //     username:'',
    //     email:'',
    //     first_name:'',
    //     last_name:'',
    //     id:'',
    //     image_url:'',
    //     tagline:'',
    //     haikus: [
    //         {
    //         id:'',
    //         created_on:'',
    //         title:'',
    //         body:'',
    //         }
    //     ]
    // })
    
    const getProfile = async () => {
        try{ 
        const response = await Client.get(`users/sakura`)
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
            <div>
                <img src={profiles.image_url} ></img>
                <h2>USERNAME: {profiles.username}</h2>
                <h2>NAME: {profiles.first_name} {profiles.last_name}</h2>
                <h2></h2>
                <h2>EMAIL: {profiles.email}</h2>
                <h2>TAGLINE: {profiles.tagline}</h2>
            </div>
            <div>
                <h2>My Poems</h2>
                {profiles.haikus.map((haiku) => (
                    <div key={haiku.id}>
                    <h2>{haiku.created_on}</h2>
                    <h2>{haiku.title}</h2>
                    <h2>{haiku.body}</h2>
                    <Link to="edit_post" state={{myHaiku:haiku}}> EDIT </Link>
                    </div>
                ))}
                
            </div>
        </div>

    ) 
}