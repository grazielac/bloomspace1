import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LogInForm";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  // const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <header className="p-4 md:px-8 border-b">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center cursor-pointer">
          <h1 className="text-2xl font-bold cursor-pointer">Bluméa</h1>
          {/* <div>
            <img src="" alt="" />
          </div> */}
          {/* Search + buttons */}
          <div className="flex items-center space-x-4">
            <form
              action="./search/"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <label htmlFor="search" className="sr-only cursor-pointer">
                Search
              </label>
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search..."
                className="border rounded-3xl px-2 py-1"
              />
              <button
                type="submit"
                className="bg-gray-200 px-3 py-1 rounded-3xl cursor-pointer"
              >
                Search
              </button>
            </form>

            <button
              className="cursor-pointer"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Sign in
            </button>
            <button
              className="px-3 py-1 rounded-3xl bg-gray-500 text-white cursor-pointer"
              // onClick={() => {
              //   setShowRegister(true);
              // }}
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {showModal && <RegisterForm onClose={() => setShowModal(false)} />}
      {showModal && <LogInForm onClose={() => setShowModal(false)} />}
    </>
  );
}
