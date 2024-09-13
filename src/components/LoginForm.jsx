import React, { useEffect, useState } from "react";

const LoginForm = () => {
  return (
    <>
      <form action="" className="flex-none">
        <div className="gap-2 p-2 text-left">
          <label
            htmlFor="Email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="abiyyu@dev.com"
                autoComplete="email"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mb-2 gap-2 p-2 text-left">
          <label
            htmlFor="Password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="strongPassword123"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;