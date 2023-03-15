import React from 'react'
import axios from 'axios'

const Post = () => {

    const postData = async () => {
        const data = {
            name: "Feliciano",
            age: 45,
            email: "Adriano@gui",
            phone: "97907971",
            skills: [
                "trabalhar", "estudar", "comer cú de kurioso"
            ]
        };
        const response = await axios.post('http://localhost:3000/users', data);

        return console.log(response)
     
    }

    
    return (
        <div>
            {/* <label>Name</label>
            <input type="text" />
            <label>Age</label>
            <input type="text" />
            <label>Phone</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" /> */}

                
            <button style={{background:'green'}} onClick={() => postData(location.reload())}>Post</button>
        </div>
    )
}

export default Post