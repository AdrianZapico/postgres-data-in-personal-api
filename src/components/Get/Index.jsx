
import axios from 'axios'
import { useEffect, useState } from 'react'

const baseURL = "http://localhost:3000/users";

function Get() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;






  return (
    <div className="App">
   
   <div style={{backgroundColor:'gray'}}>
   {post.map(item => (
        <div key={item.id} style={{border:'2px solid black', margin:'3px',background:'white',color:'black',display:'inline-block',padding:'10px'}}>
          <h1>{item.id}</h1>
          <h2>{item.name}</h2>
          <p>{item.age}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
        
        </div>
      ))}
    </div>
    </div>

     
    
  )
}

export default Get
