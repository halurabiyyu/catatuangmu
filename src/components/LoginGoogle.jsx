import React, { useEffect, useState } from "react";
import LogoGoogle from '../assets/google.svg'

export default function LoginGoogle(params) {
  return (
    <>
      <a
        href="#"
        className="flex items-center justify-center rounded-md outline outline-slate-300 mt-4 px-4 py-2 hover:bg-slate-100"
      >
        <img src={LogoGoogle} alt="Google Logo" className="w-5 h-5 mr-2" />
        <span>Login with Google</span>
      </a>
    </>
  );
}
