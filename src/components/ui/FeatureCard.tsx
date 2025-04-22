import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className={`${bgColor} shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border flex w-full flex-col items-stretch p-6 rounded-lg border-black border-solid max-md:px-5`}
    >
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="self-stretch flex-1 shrink basis-[0%] w-full font-normal leading-[29px] mt-2">
        {description}
      </p>
    </div>
  );
};
