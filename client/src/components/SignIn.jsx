import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Modal, Button, Label, TextInput, Checkbox } from 'flowbite-react'
import { DataContext } from "../DataContext";
import axios from 'axios'


export default function SignIn () {

    let navigate = useNavigate()

    // const [user, setUser] = useContext(DataContext)
    // const [user, setUser] = useState('')
    // const [formData, setFormData] = useState({username:'', password:''})
    const {setSignInStatus, user, setUser, setAuth, setTokens} = useContext(DataContext)
    const [signin, setSignin] = useState({username:'', password:''})
   
    
    const [ signinModal, setSigninModal ] = useState(false)

    const toggleSigninModal = () => {
        setSigninModal(!signinModal)
        setSignin({username:'', password:''})
    }

    const handleChange = (e) => {
        setSignin({...signin, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8000/api/token/', signin)
            console.log(res.data)
            localStorage.setItem('token', res.data.access)
            localStorage.setItem('user', signin.username)
            setTokens(res.data)
            setAuth(true)
            setUser(signin.username)
            toggleSigninModal()
            navigate('/feed')
        } catch (error) {
            throw error
        }
    }
 
    return (
        <div>
            {user ? <h2>
                <span className="block text-sm">
                    {user}
                </span> 
            </h2> : null}
            <Button onClick={toggleSigninModal}>
                Sign In
            </Button>
            
            <Modal
                show={signinModal}
                size="md"
                popup={true}
                onClose={toggleSigninModal}
            >
                <Modal.Header />
                <Modal.Body>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Sign in to Ephemera
                    </h3>
                    <div>
                        <div className="mb-2 block">
                            <Label
                            htmlFor="username"
                            value="Your username"
                            />
                        </div>
                        <TextInput
                            id="username"
                            type="username"
                            placeholder="username"
                            name="username"
                            required={true}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                            htmlFor="password"
                            value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            placeholder="password"
                            required={true}
                            name="password"
                            value={signin.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                        Remember me
                        </Label>
                    </div>
                    <a
                        href="/modal"
                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                        Lost Password?
                    </a>
                    </div>
                    <div className="w-full">
                    <Button type='submit'>
                        Sign in to your account
                    </Button>
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{' '}
                    <a
                        href="/modal"
                        className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                        Create account
                    </a>
                    </div>
                </div>
                </form>
                </Modal.Body>
            </Modal>
        </div>

    )
}