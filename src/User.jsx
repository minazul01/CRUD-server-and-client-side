import React from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const data = useLoaderData();
  const handleDelete = (_id) =>{
    console.log(_id)
    fetch(`http://localhost:5000/users/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount){
            alert('user delete')
        }else{
            alert('user not delete')
        }
    })
  }
  return (
    <div>
      <h1>All user {data.length}</h1>
      {data.map((user) => (
        <div key={user._id}>
          <p className="container">
            name: {user.name} email: {user.email}
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default User;
