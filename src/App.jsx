import "./App.css";

function App() {

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const formData = {name, email}
  console.log(formData)
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
            <input type="email" name="email" id="" />
          </label>
          <br />
          <input type="submit" value="ADD" />
        </form>
      </div>
    </>
  );
}

export default App;
