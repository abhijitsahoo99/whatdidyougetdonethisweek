import React from "react";
import { EmailInput } from "../ui/EmailInput";
export const Hero: React.FC = () => {
  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email);
    // Handle email submission
  };
  return <section className="bg-white flex w-full flex-col overflow-hidden items-stretch justify-center max-md:max-w-full px-[64px] py-[207px] my-0">
      <div className="flex mb-[-41px] w-full flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
        <div className="w-full text-black text-center max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
            <h1 className="text-7xl font-bold max-md:max-w-full max-md:text-[40px]">
              GET DONE MORE EVERY WEEK
            </h1>
            <p className="text-4xl font-normal mt-16 max-md:max-w-full max-md:mt-10">
              Get weekly email check-ins, AI-powered ratings, and personalized
              feedback to help you stay accountable and improve consistently.
            </p>
          </div>
        </div>
        <div className="mt-[100px] max-md:mt-10">
          <EmailInput onSubmit={handleEmailSubmit} />
        </div>
      </div>
    </section>;
};