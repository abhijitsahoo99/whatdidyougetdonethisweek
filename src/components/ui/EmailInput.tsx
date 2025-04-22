import React from "react";
import { useForm } from "react-hook-form";
interface EmailInputProps {
  onSubmit: (email: string) => void;
}
export const EmailInput: React.FC<EmailInputProps> = ({
  onSubmit
}) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<{
    email: string;
  }>();
  const onSubmitForm = (data: {
    email: string;
  }) => {
    onSubmit(data.email);
  };
  return <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white justify-center flex items-center gap-8 text-4xl flex-wrap max-md:max-w-full">
      <input type="email" placeholder="Enter your email address" {...register("email", {
      required: true,
      pattern: /^\S+@\S+$/i
    })} className="self-stretch border min-w-60 text-[rgba(144,131,131,1)] font-light my-auto px-4 py-6 rounded-lg border-black border-solid max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-[rgba(2,3,222,1)]" aria-label="Email address" />
      <button type="submit" className="self-stretch bg-[rgba(2,3,222,1)] border gap-2.5 text-white font-normal my-auto p-6 rounded-lg border-black border-solid max-md:px-5 hover:bg-[rgba(2,3,222,0.9)] transition-colors">
        Get Started
      </button>
    </form>;
};