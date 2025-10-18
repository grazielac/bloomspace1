import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function RegisterForm({ onClose }) {
  console.log("onClose prop:", onClose);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
    onClose();
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <Dialog open={true} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black">
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white rounded-3xl p-6 max-w-md w-full shadow-xl">
              <div className="bg-gray-200 border rounded-3xl h-full">
                <div className=" border rounded-3xl flex bg-gray-300 h-3/6">
                  <img src="" alt="" />
                  <div className="bg-gray-400">
                    <img src="" alt="" />
                    <h2>Get Started</h2>
                    <p>Welcome to Bluméa</p>
                    <hr />

                    <form onSubmit={handleSubmit}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
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
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
