import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Feed() {

    const [haikus, setHaikus] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:8000/haikus/')
        .then(res => {
            if (res) {
                setHaikus(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    if (!haikus) {
        return <h3> Loading please wait.</h3>
    } else {
    
//     return  (
//         <div classNameName="feed-container">
//             <h1>Recent Haikus</h1>
//             <div>
//             {haikus.map((haiku) => (
//                 <div key={haiku.id}>
//                     <h3>Written by: {haiku.user_id}</h3>
//                     <p>On {haiku.created_on}</p>
//                     <h5>Title: {haiku.title}</h5>
//                     <p>{haiku.body}</p>
//                 </div>
            
    
//             ))}
//             </div>

//         </div>


//     )
// }}

return (
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Recent Haikus</h2>
      </div> 
      <div className="grid gap-8 lg:grid-cols-2">
        {haikus.map((haiku) => (
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={haiku.id}>
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                      Haiku
                  </span>
                  <span className="text-sm">{haiku.created_on}</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{haiku.title}</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{haiku.body}</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                      <span className="font-medium dark:text-white">
                      BY {haiku.user_id} username
                      </span>
                  </div>
                  <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>
           
          </article> 
         ))}
      </div>  
  </div>
</section>
 )
}}