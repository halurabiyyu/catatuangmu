import React, { useEffect, useState } from "react";

export default function welcome() {
  return (
    <>
      <div className="h-svh flex bg-slate-200 font-mono">
        <div className="m-auto bg-white w-80 p-2 rounded h-fit text-center drop-shadow">
          <h1 className="font-bold text-3xl hover:underline">LOGIN</h1>
          <div className="h-[80%] content-center">
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
          </div>
          <div className="container p-2">
            <h1 className="text-slate-500 mb-2">OR</h1>
            <a href="#" className="rounded-md outline outline-slate-300 mt-4 px-2 py-1">Login with Google</a>
          </div>
        </div>
        <div className="bg-white w-[50%] max-w-[50%] items-center flex px-5">
          <h1 className="text-9xl font-bold drop-shadow w-1 hover:underline transition-all">Control Your Budget!</h1>
        </div>
      </div>
    </>
  );
}
