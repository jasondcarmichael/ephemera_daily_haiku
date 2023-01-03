import {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import { DataContext } from "../DataContext";
import Client from "../services/api";

export default function Logout() {

  let navigate = useNavigate()

    const {setLoginStatus, setUser, setAuth} = useContext(DataContext)

    const handleLogout = () => {
        setUser(null)
        setAuth(false)
        localStorage.clear()
        window.location.reload()
        console.log('logout successful')
        navigate('/')
    }
  
    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
