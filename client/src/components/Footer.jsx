import React from "react";


export default function Footer() {
  return (
    <>
      <div className="flex justify-between h-50 bg-gray-100 border rounded-tl-3xl rounded-tr-3xl">
        <div className="bg-amber-300">
          <img src="" alt="Bluméa logo" />
          <p className="text-sm">A hyper-local, curated hub for Barcelona creatives to discover events,
             showcase their work, and connect with each other — all in one place.</p>
          {/* ICONS */}
        </div>

        <div>
          <div className="flex flex-col md:flex-row py-10 px-20 gap-4 md:gap-8">
            <div className="">
              <h3 className="font-semibold">Bluméa</h3>
              <ul>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* 2nd */}
            <div className="">
              <h3 className="font-semibold">Discover</h3>
              <ul>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Studios
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Workshops
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Cities
                  </a>
                </li>
              </ul>
            </div>

            {/* 3rd */}
            <div className="">
              <h3 className="font-semibold">Account</h3>
              <ul>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-gray-500"
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
