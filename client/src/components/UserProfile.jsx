import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../DataContext";
import Client from "../services/api";

export default function UserProfile() {
    let navigate = useNavigate()
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
            <div>
                <img src={profiles.image_url} ></img>
                <h2>USERNAME: {profiles.username}</h2>
                <h2>NAME: {profiles.first_name} {profiles.last_name}</h2>
                <h2></h2>
                <h2>EMAIL: {profiles.email}</h2>
                <h2>TAGLINE: {profiles.tagline}</h2>
            </div>
            <div className="my-poems-container">
                <h2>My Poems</h2>
                {profiles.haikus.map((haiku) => (
                    <div className="my-poems-card" key={haiku.id}>
                    <h2>{haiku.created_on}</h2>
                    <h2>{haiku.title}</h2>
                    <h2 className="haiku-body">{haiku.body}</h2>
                    <Link to="edit_post" state={{myHaiku:haiku}}> EDIT </Link>
                    </div>
                ))}
                
            </div>
        </div>

    ) 
}
