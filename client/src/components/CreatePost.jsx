import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Card, TextInput, Textarea, Button } from "flowbite-react"
import { format } from 'date-fns'
import { DataContext } from "../DataContext";
import Client from "../services/api";

export default function CreatePost() {

    let navigate = useNavigate()
    const {user, profiles} = useContext(DataContext)

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
            navigate('/feed')
          });

        } catch (error) {
            throw error
        } 
    };

    
  return (
    <div className="create-haiku-wrapper">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Write a Haiku</h2>
      </div> 

      <div className="max-w-sm">
            <Card
                imgAlt="Bamboo"
                imgSrc="https://www.kinderart.com//wp-content/uploads/japanesebrush1-1024x773.png"
            >
                    <div className="flex justify-between items-center mb-3 text-gray-500">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                            Daily Inspiration
                        </span>
                        <span className="text-primary-800 text-xs font-medium ">{format(new Date(), "EEEE, MM/dd/yyyy") }</span>
                    </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Today's Writing Prompt
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Write about today's weather. How does it feel? How is it impacting your world?
                </p>
            </Card>
        </div>
      <div className="create-haiku-form">
        <Card>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <TextInput
              id="title"
              type="text"
              placeholder="Title..."
              required={true}
              maxLength="50" onChange={handleChange} value={formState.title}
            />
          </div>
        <div id="textarea">
          <Textarea
            id="body"
            placeholder="Your haiku..."
            required={true}
            rows={3}
            maxLength="255"
            onChange={handleChange} value={formState.body}
          />
        </div>
          <Button type="submit">
            Post
          </Button>
        </form>
        </Card>
      </div>
    </div>
  )
}