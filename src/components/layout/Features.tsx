import React from "react";
import { FeatureCard } from "../ui/FeatureCard";

export const Features: React.FC = () => {
  const features = [
    {
      title: "Weekly Check-ins",
      description:
        "Get a friendly email every Friday. Just reply to share your progress.",
      bgColor: "bg-[rgba(210,210,253,1)]",
    },
    {
      title: "AI Rating System",
      description:
        "Have your updates rated 0-10 for detail, impact, and measurable outcomes.",
      bgColor: "bg-[rgba(210,234,255,1)]",
    },
    {
      title: "Smart Feedback",
      description:
        "Get personalized feedback to enhance your progress tracking and achievements.",
      bgColor: "bg-[rgba(236,255,253,1)]",
    },
  ];

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-16 py-[146px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-29px] items-center gap-[40px_41px] flex-wrap max-md:mb-2.5 max-w-[1200px] w-full">
        <div className="self-stretch min-w-60 text-2xl text-black w-[363px] mx-auto space-y-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="self-stretch min-w-60 w-[748px] mx-auto rounded-[0px_0px_0px_0px] max-md:max-w-full">
          <div className="flex flex-col relative min-h-[540px] w-full pt-[78px] pb-2 px-[75px] max-md:max-w-full max-md:px-5">
            <img alt="Email interface demonstration" className="absolute h-full w-full inset-0 object-fill" src="/lovable-uploads/fe5410b4-511f-4646-8cd4-d3d322888b3b.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
