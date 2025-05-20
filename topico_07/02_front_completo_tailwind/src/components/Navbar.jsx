// import React from "react";
import appLogo from './../assets/newAppLogo.svg';

export const Navbar = () => {
  return (
    <nav className="flex max-h-16 justify-between bg-blue-800 pt-2">
      <div className="flex w-1/4 justify-start ">
        <a href="{{route('landing')}}">
        <img src={appLogo}  className="size-12" />
        </a>
      </div>
      <div className="flex w-3/4 justify-around text-center sm:w-[30%] md:w-1/4 lg:w-1/5 xl:w-[15%] 3xl:w-[10%] 4xl:w-[8%]">
        {/* @auth */}
        <a
          href="{{ url('/dashboard') }}"
          className="mt-4 text-sm text-gray-400 underline hover:text-gray-100"
        >
          Dashboard
        </a>
        {/* @else */}
        <a
          href="{{ route('login') }}"
          className="mt-4 text-sm text-gray-400 underline hover:text-gray-100"
        >
          Log in
        </a>
        {/* @if (Route::has('register')) */}
        <a
          href="{{ route('register') }}"
          className="mt-4 text-sm text-gray-400 underline hover:text-gray-100"
        >
          Register
        </a>
        {/* @endif @endauth */}
      </div>
    </nav>
  );
};
