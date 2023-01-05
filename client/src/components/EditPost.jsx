import { useNavigate, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { Card, TextInput, Textarea, Button  } from 'flowbite-react'
import { DataContext } from "../DataContext";
import Client from "../services/api";

export default function EditPost() {

    let location = useLocation()
    let myHaiku = location.state.myHaiku

    let navigate = useNavigate()
    const { profiles } = useContext(DataContext)

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
            navigate('/profile')
          });

        } catch (error) {
            throw error
        }  
    };

    const deletePost = async () => {
        try {
            const response = await Client.delete(`haikus/${myHaiku.id}`)
            console.log(`deleted ${myHaiku.title} successfully`)
            console.log(response.status)
        } catch (error) {
            throw error
        } 
    }

    return (

        <div className="create-haiku-wrapper">
            <div className="max-w-sm">
                <Card
                    imgAlt="haiku"
                    imgSrc="http://cdn.shopify.com/s/files/1/1645/0221/articles/basho-poem-bonhams_150.jpg?v=1507716823"
                >
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-6">
                        <h2 className="mb-2 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Edit Your Haiku</h2>
                    </div> 
                </Card>
            </div>
            <div className="edit-haiku-form">
                <Card>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <TextInput
                    id="title"
                    type="text"
                    maxLength="50" onChange={handleChange} value={formState.title}
                    />
                </div>
                <div id="textarea">
                <Textarea
                    id="body"
                    rows={3}
                    maxLength="255"
                    onChange={handleChange} value={formState.body}
                />
                </div>
                <Button type="submit">
                    Update
                </Button>
                </form>
                <div>
                    <Button 
                    onClick={deletePost}
                    color="failure">
                        DELETE
                    </Button>
                    </div>
                </Card>
            </div>
        </div>

    )
}