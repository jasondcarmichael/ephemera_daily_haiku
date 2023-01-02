import React from "react";
import Client from "./services/api";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode"

export const DataContext = React.createContext();
export default DataContext

// export const DataProvider = ({children}) => {

//     let [authTokens, setAuthTokens] = useState(null)
//     let [user, setUser]= useState(null)

//     const loginUser = async (e)=> {
//         e.preventDefault()
//         try {
//             const res = await Client.post('token/obtain/', {
//                 username:e.target.username.value,
//                 password:e.target.password.value
//             })
//             console.log(res.data)
//             if (res.status === 200) {
//                 Client.defaults.headers['Authorization'] = 
//                 `JWT ${res.data.access}`
//                 // setAuthTokens(res.data)
//                 setUser(jwt_decode(res.data.access))
//                 localStorage.setItem('access_token', res.data.access)
//                 localStorage.setItem('refresh_token', res.data.refresh)
//             } else {
//                 return res
//             }
//             Client.get(`users/${e.target.username.value}`)
//                 localStorage.setItem('user_id', res.data.id)
//                 localStorage.setItem('username', e.target.username.value)
//             //   setLoginStatus(true)
//             //   navigate('/')
//         }  catch (error) {
//             throw error
//         }
//     }

//     let contextData = {
//         user:user,
//         loginUser:loginUser


//     }


//     return(
//         <DataContext.Provider value={contextData}>
//             {children}

//         </DataContext.Provider>
//     )
// }
