import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Features } from "@/components/layout/Features";
import { Footer } from "@/components/layout/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex flex-col relative min-h-[832px] w-full overflow-hidden text-2xl font-bold leading-[1.2] pb-[735px] max-md:max-w-full max-md:pb-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ed3c6aed72ebfdbcb0e14431a4b9cb5c70d7885?placeholderIfAbsent=true"
          alt="Hero background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <Navbar />
      </div>
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
