
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Features } from "@/components/layout/Features";
import { Footer } from "@/components/layout/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative w-full overflow-hidden min-h-[832px] text-2xl font-bold leading-[1.2] pb-[735px] max-md:max-w-full max-md:pb-[100px]">
        {/* Hero section background image */}
        <div className="absolute h-full w-full inset-0 z-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ed3c6aed72ebfdbcb0e14431a4b9cb5c70d7885?placeholderIfAbsent=true"
            alt="Hero background"
            className="h-full w-full object-cover"
          />
          {/* Bottom gradient overlay to blend image into next section */}
          <div
            className="absolute left-0 right-0 bottom-0 h-44 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            }}
          />
        </div>
        <div className="relative z-10">
          <Navbar />
        </div>
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

