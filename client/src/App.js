import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { DataContext } from './DataContext';
import Header from './components/Header';
// import Main from './components/Main';
import FooterCom from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Feed from './components/Feed';
import UserProfile from './components/UserProfile';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

function App() {

  const [loginStatus, setLoginStatus] = useState(false)
  const [user, setUser] = useState(null)
  const [auth, setAuth] = useState(false)
  const [tokens, setTokens] = useState({})
  const [haikus, setHaikus] = useState([])
  const [profiles, setProfiles] = useState({
    username:'',
    email:'',
    first_name:'',
    last_name:'',
    id:'',
    image_url:'',
    tagline:'',
    haikus: [
        {
        id:'',
        created_on:'',
        title:'',
        body:'',
        }
    ]
  })

  useEffect(()=> {
    const token = localStorage.getItem('token')
    console.log(token)
    console.log(user)
    if (token) {
      setUser(localStorage.getItem('username'))
      setAuth(true)
    }
  },[])


  return (
    <div className="App">
      <DataContext.Provider value={{loginStatus, setLoginStatus, user, setUser, auth, setAuth, tokens, setTokens, haikus, setHaikus, profiles, setProfiles}}>
        <div className="App-header">
          <Header />
        </div>

        <div className="App-main">
          <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/login" element = {<Login />} />
                <Route path = "/feed" element = {<Feed />} />
                <Route path = "/profile" element = {<UserProfile />} />
                <Route path = "/create" element = {<CreatePost />} />
                <Route path = "/profile/edit_post" element = {<EditPost />} />
            </Routes>
        </div>

        <div className="App-footer">
          <FooterCom />
        </div>
      </DataContext.Provider>

    </div>
  );
}

export default App;
