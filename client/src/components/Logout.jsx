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


  

//   const logout = async () => {
//     await Client.post('users/logout', {
//         refresh_token: localStorage.getItem('refresh_token'),
//     })
//     .then(res => {
//         if (res.status) {
//           setLoginStatus(false)
//           return res
//         } else {
//           return res
//         }
//       })
//       .catch(error => {
//         return console.error
//       })
//     }

// useEffect(()=> {
//     logout()
//     setLoginStatus(false)
//     localStorage.removeItem('refresh_token')
//     localStorage.removeItem('access_token')
//     localStorage.removeItem('token')
//     localStorage.removeItem('username')
//     localStorage.removeItem('user_id')
//     console.log('logout successful')
//   },[])
  
