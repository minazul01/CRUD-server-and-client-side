import { Link } from "react-router-dom";
import "./App.css";

function App() {

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const formData = {name, email}
  console.log(formData)
  fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.insertedId){
      alert('user added successfully')
    }
    form.reset();
  })
}

  return (
    <>
      <h2>CRUD server and client.</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            name:
            <input type="text" name="name" id="" />
          </label>
          <br />
          <label htmlFor="">
            email:
            <input type="email" required name="email" id="" />
          </label>
          <br />
          <input type="submit" value="ADD" />
        </form>
        <Link to='/users'><button>Click user</button></Link>
      </div>
    </>
  );
}

export default App;
