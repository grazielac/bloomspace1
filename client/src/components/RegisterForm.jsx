import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <div className="bg-gray-200 border rounded-3xl h-3/4 ">
        <div className=" border rounded-3xl flex bg-gray-300">
          <img src="" alt="" />
          <div className="bg-gray-400">
            <img src="" alt="" />
            <h2>Get Started</h2>
            <p>Welcome to Bluméa</p>
            <hr />

            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              ></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
