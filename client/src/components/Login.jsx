import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataContext";
import Client from "../services/api";

export default function Login() {
  
    let navigate = useNavigate()
    const {setLoginStatus, setUser, setAuth, setTokens} = useContext(DataContext)

    const [formData, setFormData] = useState({username:'', password:''})

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await Client.post('token/obtain/', {
          username: formData.username,
          password: formData.password
        }) 
        .then(res => {
        if (res.status === 200) {
          localStorage.setItem('access_token', res.data.access)
          localStorage.setItem('refresh_token', res.data.refresh)
          setTokens(res.data)
          setAuth(true)
          setUser({username: formData.username})
          console.log(res.data)
        } else {
          return alert('Something went wrong')
        }
      })
        .then(res => {
          Client.get(`users/${formData.username}`)
          .then(res => {
            localStorage.setItem('user_id', res.data.id)
            localStorage.setItem('username', formData.username)
            setLoginStatus(true)
            // setUser(res.data.username)
            navigate('/feed')
          })
          // console.log(user)
        })
      } catch (error) {
        throw error
      }
    }

    
    return (
      <div className='form login-form'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
      
          <input type='text' name='username' placeholder='Enter Username' value={formData.username} onChange={handleChange}/>
          <input type='password' name='password' placeholder='Enter Password'value={formData.password} onChange={handleChange}/>
          <input type='submit' />      
        </form>
      </div>


  )
}

