import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const data = useLoaderData();
  const [users, setUser] = useState(data);
  console.log(users)
  const handleDelete = (_id) =>{

    fetch(`http://localhost:5000/users/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
       
        if(data.deletedCount>0){
            alert('user delete');
            const updatedUsers = users.filter(user => user._id !== _id);

            setUser(updatedUsers)  
        }
    })
  }
  return (
    <div>
      <h1>All user {data.length}</h1>
      {data.map((user) => (
        <div key={user._id}>
          <p className="container">
            name: {user.name} email: {user.email} {user._id}
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default User;
