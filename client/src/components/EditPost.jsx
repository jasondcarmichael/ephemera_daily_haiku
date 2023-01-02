import { useNavigate, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import Client from "../services/api";

export default function EditPost() {

    let location = useLocation()
    let myHaiku = location.state.myHaiku
    console.log(myHaiku)

    let navigate = useNavigate()
    const {user, setUser, profiles, setProfiles} = useContext(DataContext)

    const initialState = {
        title: myHaiku.title,
        body: myHaiku.body,
      };
    const [formState, setFormState] = useState(initialState);
    
    const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        setFormState(initialState);
        const updatePost = {
          user_id: profiles.id,
          title: formState.title,
          body: formState.body,
        };
        try {
            const res = await Client.put(`haikus/${myHaiku.id}`, updatePost)
            .then((response) => {
            console.log(response.status);
            console.log(response.data.token);
          });

        } catch (error) {
            throw error
        }  
    };



    return (
        <div>
            <h2>Edit Your Haiku</h2>
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input id="title" type="text" placeholder="Title here" maxLength="50" onChange={handleChange} value={formState.title} />
                <input id="body" type="text" placeholder="Haiku here" maxLength="255" onChange={handleChange} value={formState.body} />
                
                <input type="submit" />
            </form>
        </div>
        
    )
}