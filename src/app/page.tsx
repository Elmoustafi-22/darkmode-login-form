"use client";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

export default function AuthPg() {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex w-full max-w-[800px] rounded-lg shadow-lg">
        <aside className="relative w-1/2 rounded-l-lg bg-store bg-cover bg-no-repeat">
          <div className="w-full h-full py-20 rounded-l-lg flex flex-col items-center justify-end bg-gray bg-opacity-75 dark:bg-darkBlue dark:bg-opacity-70">
            <h1 className="uppercase text-4xl text-darkBlue font-medium mb-4 dark:text-white">Get Started</h1>
            <a href="#" 
              className="w-60 text-center py-2 uppercase font-medium text-white dark:text-darkBlue dark:bg-white bg-darkBlue rounded"
            >Sign in with Google</a>
            <a href="#"
              className="w-60 text-center py-2 uppercase font-medium text-white dark:text-darkBlue dark:bg-white bg-darkBlue rounded mt-2"
            >Sign in with Github</a>
          </div>
        </aside>
        <aside className="w-1/2 h-[500px] rounded-r-lg bg-gray px-8 pt-10 pb-20 dark:bg-darkBlue">
          <nav className="flex justify-end mb-16">
            <a onClick={() => setToggleForm(false)} 
                className={`py-1 px-3 text-sm font-medium border ${toggleForm ? "bg-white text-darkBlue dark:bg-darkBlue dark:text-white":"bg-darkBlue text-white dark:bg-white dark:text-darkBlue"} border-darkBlue cursor-pointer`}>Login</a>
            <a onClick={() => setToggleForm(true)} 
                className={`py-1 px-3 text-sm font-medium border border-darkBlue cursor-pointer ${toggleForm ? "bg-darkBlue text-white dark:bg-white dark:text-darkBlue": "bg-white text-darkBlue dark:bg-darkBlue dark:text-white"}`}>Register</a>
          </nav>
          {!toggleForm && <LoginForm />}
          {toggleForm && <SignUpForm />}
          
        </aside>
      </div>
    </main>
  );
}
