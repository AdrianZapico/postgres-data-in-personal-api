import React from 'react'
import axios from 'axios';

const Delete = () => {
  
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${id}`);
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  
  
  return (
    <div><button style={{border:'red',background:'red'}}
    onClick={()=> deleteData(9,location.reload())}
    >Delete</button></div>
  )
}

export default Delete