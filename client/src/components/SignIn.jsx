import { useState, useContext } from "react";
import {Modal, Button, Label, TextInput, Checkbox } from 'flowbite-react'
import { DataContext } from "../DataContext";
import axios from 'axios'


export default function SignIn () {

    // const [user, setUser] = useContext(DataContext)
    const [user, setUser] = useState('')
    const [formData, setFormData] = useState({username:'', password:''})
    const [ signinModal, setSigninModal ] = useState(false)

    const toggleSigninModal = () => {
        setSigninModal(!signinModal)
        setFormData({username:'', password:''})
    }

    const handleSigninForm = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSignin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get('', formData)
            console.log(res.data)
            setUser(formData.username)
            toggleSigninModal()
        } catch (error) {
            throw error
        }
    }
 
    return (
        <div>
            <Button onClick={toggleSigninModal}>
                Sign In
            </Button>
            {/* <span className="block text-sm">
                {user}
            </span> */}
            <Modal
                show={signinModal}
                size="md"
                popup={true}
                onClose={toggleSigninModal}
            >
                <Modal.Header />
                <Modal.Body>
                <form classname="flex flex-col gap-4" onSubmit={handleSignin}>
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
                            onChange={handleSigninForm}
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
                            value={formData.password}
                            onChange={handleSigninForm}
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
                    <Button>
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