
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
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="bg-white flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-8 w-full max-md:max-w-full text-base md:text-2xl lg:text-4xl"
    >
      <input
        type="email"
        placeholder="Enter your email address"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i
        })}
        className="flex-1 min-w-0 border text-[rgba(144,131,131,1)] font-light px-3 py-3 md:py-6 md:px-4 rounded-lg border-black border-solid focus:outline-none focus:ring-2 focus:ring-[rgba(2,3,222,1)] max-md:text-base max-md:w-full"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="w-full md:w-auto bg-[rgba(2,3,222,1)] border gap-2.5 text-white font-normal p-3 md:p-6 rounded-lg border-black border-solid hover:bg-[rgba(2,3,222,0.9)] transition-colors max-md:text-base max-md:px-5"
      >
        Get Started
      </button>
    </form>
  );
};
