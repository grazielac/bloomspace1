import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  SlSocialGoogle,
  SlSocialLinkedin,
  SlSocialFacebook,
} from "react-icons/sl";

export default function LogInForm({ onClose }) {
  return (
    <>
      <Dialog open={true} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-amber-400/30">
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white p-6 max-w-md w-full rounded-2xl shadow-xl">
              <h2 className="text-xl font-bold mb-4">Log in to your Account</h2>

              <form className="space-y-4">
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
                  className="w-full bg-amber-200 py-2 rounded"
                >
                  Login
                </button>
              </form>

              <div className="mt-10">
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
