import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Delete = () => {



  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const[id,setId] = useState(0)

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (


    <div>
      <input type="number" onChange={handleChange} value={id} placeholder="digite id" />

      <button style={{ border: 'red', background: 'red' }}
        onClick={() => deleteData(id, location.reload())}
      >Delete</button>
    </div>
  )
}

export default Delete