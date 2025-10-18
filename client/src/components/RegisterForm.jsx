import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  SlSocialGoogle,
  SlSocialLinkedin,
  SlSocialFacebook,
} from "react-icons/sl";

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
        <div className="fixed inset-0 bg-blue-400/30">
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white rounded-3xl p-6 max-w-md w-full shadow-xl">
              <h2 className="text-xl font-bold mb-4">Get Started</h2>
              <p>Welcome to Bluméa</p>

              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-2 rounded"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="johnsmith@gmail.com"
                  className="w-full border p-2 rounded"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="8+ characters"
                  className="w-full border p-2 rounded"
                />
                <button
                  type="submit"
                  className="w-1/4 bg-amber-200 py-2 rounded-3xl mt-5"
                >
                  Register
                </button>
              </form>

              <div className="mt-10 flex gap-5">
                <p>Create account with</p>
                <div className="flex gap-4">
                  <div>
                    <SlSocialGoogle size={26} />
                  </div>
                  <div>
                    <SlSocialLinkedin size={26} />
                  </div>
                  <div>
                    <SlSocialFacebook size={26} />
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
