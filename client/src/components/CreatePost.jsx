import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import Client from "../services/api";

export default function CreatePost() {

    let navigate = useNavigate()
    const {user, setUser, profiles, setProfiles} = useContext(DataContext)

    const initialState = {
        createdOn: "",
        userId: "",
        title: "",
        body: "",
      };

    const [formState, setFormState] = useState(initialState)

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        setFormState(initialState);
        const createPost = {
          user_id: profiles.id,
          title: formState.title,
          body: formState.body,
        };
        try {
            const res = await Client.post("haikus/", createPost)
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
            <h2>Write a Haiku</h2>
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input id="title" type="text" placeholder="Title here" maxLength="50" onChange={handleChange} value={formState.title} />
                <input id="body" type="text" placeholder="Haiku here" maxLength="255" onChange={handleChange} value={formState.body} />
                
                <input type="submit" />
            </form>
        </div>

    )
}