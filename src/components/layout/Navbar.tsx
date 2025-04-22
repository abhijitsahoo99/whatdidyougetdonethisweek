import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="relative bg-[rgba(2,3,222,1)] flex w-full items-center gap-[40px_100px] justify-between flex-wrap pl-16 pr-[63px] py-6 max-md:max-w-full max-md:px-5">
      <Link
        to="/"
        className="self-stretch bg-[rgba(2,3,222,1)] min-w-60 gap-2.5 text-white whitespace-nowrap my-auto p-2.5 text-2xl font-bold"
      >
        Whatdidyougetdonethisweek?
      </Link>
      <div className="self-stretch flex min-w-60 items-center gap-7 my-auto">
        <Link
          to="/about"
          className="self-stretch bg-[rgba(2,3,222,1)] gap-2.5 text-white whitespace-nowrap my-auto p-2.5 text-2xl font-bold hover:bg-[rgba(2,3,222,0.9)] transition-colors"
        >
          About
        </Link>
        <Link
          to="/get-started"
          className="self-stretch bg-white gap-2.5 text-black my-auto p-2.5 rounded-lg text-2xl font-bold hover:bg-gray-100 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};
