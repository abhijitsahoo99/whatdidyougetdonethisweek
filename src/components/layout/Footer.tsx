import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full overflow-hidden pt-16 pb-8 px-16 max-md:max-w-full max-md:px-5">
      <div className="flex flex-col items-stretch max-md:max-w-full">
        <div className="self-center flex w-[1058px] max-w-full flex-col items-stretch">
          <h2 className="self-stretch min-h-[46px] w-full gap-2.5 text-[40px] text-black font-bold text-center max-md:max-w-full">
            Haven't started yet? Get shit done this week. Start now!
          </h2>
          <div className="mt-16 max-md:mt-10">
            <EmailInput
              onSubmit={(email) => console.log("Footer email:", email)}
            />
          </div>
        </div>
        <div className="w-full text-xl text-black font-medium text-center mt-[75px] max-md:max-w-full max-md:mt-10">
          <hr className="border-black border-solid" />
          <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap mt-3 max-md:max-w-full">
            <div className="self-stretch min-w-60 my-auto max-md:max-w-full">
              made with love by{" "}
              <a
                href="https://twitter.com/kb24x7"
                className="underline hover:text-[rgba(2,3,222,1)] transition-colors"
              >
                @kb24x7
              </a>{" "}
              and{" "}
              <a
                href="https://twitter.com/justabhi99"
                className="underline hover:text-[rgba(2,3,222,1)] transition-colors"
              >
                @justabhi99
              </a>{" "}
              <span className="italic">(say hi!)</span>
            </div>
            <div className="self-stretch min-w-60 my-auto">
              <Link
                to="/copyright"
                className="hover:text-[rgba(2,3,222,1)] transition-colors"
              >
                Copyright ©
              </Link>{" "}
              |{" "}
              <Link
                to="/terms"
                className="hover:text-[rgba(2,3,222,1)] transition-colors"
              >
                Terms
              </Link>{" "}
              |{" "}
              <Link
                to="/privacy"
                className="hover:text-[rgba(2,3,222,1)] transition-colors"
              >
                Privacy Policy️
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
